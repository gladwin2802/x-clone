import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import { BsHeartFill, BsChatFill, BsRepeat } from 'react-icons/bs';
import './NotificationColumn.css';

const NotificationColumn = () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = ['all', 'verified', 'mentions'];

    const renderNotificationContent = () => {
        switch (activeTab) {
            case 'all':
                return (
                    <div className="notifications-list">
                        <div className="notification-item">
                            <div className="notification-icon">
                                <BsHeartFill className="heart-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/user1?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>John Doe</strong> liked your post</p>
                                <span className="notification-time">2h</span>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-icon">
                                <BsChatFill className="chat-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/user2?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>Jane Smith</strong> replied to your post</p>
                                <span className="notification-time">3h</span>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-icon">
                                <BsRepeat className="retweet-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/user3?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>Mike Johnson</strong> reposted your post</p>
                                <span className="notification-time">5h</span>
                            </div>
                        </div>
                    </div>
                );
            case 'verified':
                return (
                    <div className="notifications-list">
                        <div className="notification-item">
                            <div className="notification-icon">
                                <FaCheckCircle className="verified-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/verified1?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>TechCrunch</strong> followed you</p>
                                <span className="notification-time">1d</span>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-icon">
                                <FaCheckCircle className="verified-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/verified2?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>NASA</strong> liked your post</p>
                                <span className="notification-time">2d</span>
                            </div>
                        </div>
                    </div>
                );
            case 'mentions':
                return (
                    <div className="notifications-list">
                        <div className="notification-item">
                            <div className="notification-icon">
                                <BsChatFill className="mention-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/mention1?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>@SarahWilson</strong> mentioned you in a post</p>
                                <span className="notification-time">1h</span>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-icon">
                                <BsChatFill className="mention-icon" />
                            </div>
                            <div className="notification-content">
                                <div className="notification-content-header">
                                    <img src="https://robohash.org/mention2?set=set4" alt="User" className="notification-avatar" />
                                </div>
                                <p><strong>@DavidBrown</strong> mentioned you in a reply</p>
                                <span className="notification-time">4h</span>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="empty-notifications">
                        <h2>Nothing to see here — yet</h2>
                        <p>From likes to reposts and a whole lot more, this is where all the action happens.</p>
                    </div>
                );
        }
    };

    return (
        <div className="main">
            <header className="main__header">
                <div className="header-content">
                    <h2>Notifications</h2>
                    <IoSettingsOutline size={20} />
                </div>
                <div className="tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </header>
            <div className="main__content notification-content">
                {renderNotificationContent()}
            </div>
        </div>
    );
};

export default NotificationColumn; 