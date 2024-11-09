// Chat.js
import React from 'react';
import './Chat.css';

const Chat = ({ messages, loading }) => {
  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <p>{message.content}</p>
        </div>
      ))}
      {loading && (
        <div className="message assistant loading">
          <p>Thinking<span className="dots">...</span></p>
        </div>
      )}
    </div>
  );
};

export default Chat;
