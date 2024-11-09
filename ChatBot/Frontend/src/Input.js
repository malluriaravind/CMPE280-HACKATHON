// Input.js
import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import './Input.css';

const Input = ({ onSendMessage, loading }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div className="input-wrapper">
      {loading && <div className="thinking-animation">Thinking<span className="dots">...</span></div>}
      <div className="input-container">
        <FaReact className="input-icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
