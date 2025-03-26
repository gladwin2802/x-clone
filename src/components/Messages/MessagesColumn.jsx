import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import './Messages.css';

const MessagesColumn = () => {
    return (
        <div className="messages-main">
            <header className="main__header">
                <div className="messages-header">
                    <h2>Messages</h2>
                    <div className="messages-header-icons">
                        <button className="icon-button">
                            <IoSettingsOutline size={20} />
                        </button>
                        <button className="icon-button">
                            <HiOutlineMail size={20} />
                        </button>
                    </div>
                </div>
            </header>
            <div className="messages-content">
                <div className="welcome-messages">
                    <h1>Welcome to your inbox!</h1>
                    <p>Drop a line, share posts and more with private conversations between you and others on X.</p>
                    <button className="write-message-button">Write a message</button>
                </div>
            </div>
        </div>
    );
};

export default MessagesColumn; 