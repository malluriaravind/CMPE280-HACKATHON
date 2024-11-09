// src/App.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { FaReact } from 'react-icons/fa';
import './App.css';

const SOCKET_URL = 'http://localhost:5000'; // Ensure this matches your server's URL and port

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize Socket.IO client
    const newSocket = io(SOCKET_URL, {
      transports: ['websocket'], // Use WebSocket transport
      reconnectionAttempts: 5,    // Attempt reconnection up to 5 times
    });

    // Event listeners
    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    newSocket.on('connect_error', (err) => {
      console.error('Socket.IO connection error:', err);
    });

    newSocket.on('message', (response) => {
      console.log('Received message from backend:', response);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: response.answer }]);
      setLoading(false);
    });

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.close();
    };
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      // Add user's message to the chat
      setMessages((prevMessages) => [...prevMessages, { role: 'user', content: input }]);
      setLoading(true);

      try {
        // Send user query to the Node.js server via Axios
        const response = await axios.post(`${SOCKET_URL}/send-query`, { query: input });
        console.log('Query sent successfully:', response.data);
      } catch (error) {
        console.error("Error sending query:", error);
        setLoading(false);
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: "Failed to send query. Please try again." }]);
      }

      setInput('');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <FaReact size={40} color="#61DBFB" />
        <h1>Economic and Social Sustainability of Marginalized and Highly Vulnerable Communities</h1>
      </header>
      <div className="chat-container">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && <div className="message assistant">Thinking...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your question..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
