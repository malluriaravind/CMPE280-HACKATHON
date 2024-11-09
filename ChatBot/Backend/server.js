// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const amqp = require('amqplib');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configure CORS to allow requests from multiple origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3005'];

const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(bodyParser.json());
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';
const REQUEST_QUEUE = process.env.REQUEST_QUEUE || 'user_prompts_queue';
const RESPONSE_QUEUE = process.env.RESPONSE_QUEUE || 'response_queue';

async function start() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(REQUEST_QUEUE, { durable: true });
    await channel.assertQueue(RESPONSE_QUEUE, { durable: true });

    console.log("Connected to RabbitMQ successfully.");

    // Route for Axios POST requests
    app.post('/send-query', async (req, res) => {
      const { query } = req.body;
      if (!query) {
        return res.status(400).send("Query is required.");
      }

      try {
        channel.sendToQueue(REQUEST_QUEUE, Buffer.from(query), {
          persistent: true,
        });
        console.log(`Query sent to ${REQUEST_QUEUE}: ${query}`);
        res.status(200).send("Query sent successfully.");
      } catch (error) {
        console.error("Error sending query to RabbitMQ:", error);
        res.status(500).send("Failed to send query.");
      }
    });

    // Consume responses and forward them to frontend via WebSocket
    channel.consume(RESPONSE_QUEUE, (msg) => {
      if (msg !== null) {
        try {
          const response = JSON.parse(msg.content.toString());
          console.log("Received response from backend:", response);
          io.emit('message', response);
          channel.ack(msg);
        } catch (error) {
          console.error("Error processing message from RESPONSE_QUEUE:", error);
          channel.nack(msg, false, false); // Discard the message
        }
      }
    }, { noAck: false });

    // Handle Socket.IO connections
    io.on('connection', (socket) => {
      console.log('A client connected:', socket.id);

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });

    server.listen(5000, () => console.log('Server listening on port 5000'));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Exit the process with failure
  }
}

start();
