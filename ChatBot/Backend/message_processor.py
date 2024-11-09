# message_processor.py
import pika
import time

RABBITMQ_URL = 'amqp://localhost'
USER_PROMPTS_QUEUE = 'user_prompts_queue'
RESPONSE_QUEUE = 'response_queue'

# Connect to RabbitMQ
connection = pika.BlockingConnection(pika.URLParameters(RABBITMQ_URL))
channel = connection.channel()

# Declare the queues
channel.queue_declare(queue=USER_PROMPTS_QUEUE)
channel.queue_declare(queue=RESPONSE_QUEUE)

# Function to process each message
def process_message(ch, method, properties, body):
    prompt = body.decode()
    print(f"Received prompt: {prompt}")
    
    # Simulate processing delay
    response = f"Processed response to: {prompt}"
    time.sleep(2)  # Simulate processing time
    
    # Send response to RESPONSE_QUEUE
    channel.basic_publish(exchange='', routing_key=RESPONSE_QUEUE, body=response)
    print(f"Sent response: {response}")
    ch.basic_ack(delivery_tag=method.delivery_tag)

# Set up consumer
channel.basic_consume(queue=USER_PROMPTS_QUEUE, on_message_callback=process_message)

print("Waiting for messages. To exit, press CTRL+C")
try:
    channel.start_consuming()
except KeyboardInterrupt:
    channel.stop_consuming()
connection.close()
