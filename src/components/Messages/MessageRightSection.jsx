import React from 'react';
import './Messages.css';

const MessageRightSection = () => {
    return (
        <div className="message-right-section">
            <div className="message-right-content">
                <h1>Select a message</h1>
                <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                <button className="new-message-button">New message</button>
            </div>
        </div>
    );
};

export default MessageRightSection; 