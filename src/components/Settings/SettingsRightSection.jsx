import React from 'react';
import { FiUser, FiLock, FiDownload, FiHeart, FiShield, FiEye, FiVolume2, FiSmartphone, FiArrowLeft } from 'react-icons/fi';
import useScreenSize from '../../hooks/useScreenSize';
import './Settings.css';

const SettingsRightSection = ({ selectedSetting = 'account', onBack }) => {
    const { isTablet, isMobile } = useScreenSize();

    const renderBackButton = () => {
        if (!isTablet && !isMobile) return null;

        return (
            <button className="settings-back-button" onClick={onBack}>
                <FiArrowLeft size={20} />
            </button>
        );
    };

    const renderAccountContent = () => (
        <div className="settings-content">
            {renderBackButton()}
            <header className="settings-content-header">
                <h2>Your Account</h2>
                <p>See information about your account, download an archive of your data, or learn about your account deactivation options</p>
            </header>

            <div className="settings-options">
                <button className="settings-option">
                    <div className="option-icon">
                        <FiUser />
                    </div>
                    <div className="option-content">
                        <h3>Account information</h3>
                        <p>See your account information like your phone number and email address.</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>

                <button className="settings-option">
                    <div className="option-icon">
                        <FiLock />
                    </div>
                    <div className="option-content">
                        <h3>Change your password</h3>
                        <p>Change your password at any time.</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>

                <button className="settings-option">
                    <div className="option-icon">
                        <FiDownload />
                    </div>
                    <div className="option-content">
                        <h3>Download an archive of your data</h3>
                        <p>Get insights into the type of information stored for your account.</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>

                <button className="settings-option">
                    <div className="option-icon">
                        <FiHeart />
                    </div>
                    <div className="option-content">
                        <h3>Deactivate your account</h3>
                        <p>Find out how you can deactivate your account.</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>
            </div>
        </div>
    );

    const renderPrivacyContent = () => (
        <div className="settings-content">
            {renderBackButton()}
            <header className="settings-content-header">
                <h2>Privacy and safety</h2>
                <p>Manage what information you see and share on X</p>
            </header>

            <div className="settings-options">
                <button className="settings-option">
                    <div className="option-icon">
                        <FiShield />
                    </div>
                    <div className="option-content">
                        <h3>Privacy</h3>
                        <p>Manage who can see your posts and interactions</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>

                <button className="settings-option">
                    <div className="option-icon">
                        <FiEye />
                    </div>
                    <div className="option-content">
                        <h3>Your posts</h3>
                        <p>Control who can reply to your posts and manage your blocked accounts</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>
            </div>
        </div>
    );

    const renderNotificationsContent = () => (
        <div className="settings-content">
            {renderBackButton()}
            <header className="settings-content-header">
                <h2>Notifications</h2>
                <p>Select the kinds of notifications you get about your activities, interests, and recommendations</p>
            </header>

            <div className="settings-options">
                <button className="settings-option">
                    <div className="option-icon">
                        <FiVolume2 />
                    </div>
                    <div className="option-content">
                        <h3>Preferences</h3>
                        <p>Choose the notifications you'd like to see — and those you don't</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>

                <button className="settings-option">
                    <div className="option-icon">
                        <FiSmartphone />
                    </div>
                    <div className="option-content">
                        <h3>Push notifications</h3>
                        <p>Manage your mobile notifications settings</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="chevron-icon">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </button>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (selectedSetting) {
            case 'account':
                return renderAccountContent();
            case 'privacy':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        {renderPrivacyContent()}
                    </div>
                );
            case 'notifications':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        {renderNotificationsContent()}
                    </div>
                );
            case 'monetization':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Monetization</h2>
                            <p>Manage your monetization options and track your earnings.</p>
                        </header>
                    </div>
                );
            case 'premium':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Premium</h2>
                            <p>Manage your premium subscription and access exclusive features.</p>
                        </header>
                    </div>
                );
            case 'creator-subscriptions':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Creator Subscriptions</h2>
                            <p>Manage your subscriptions to creators and support their work.</p>
                        </header>
                    </div>
                );
            case 'security':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Security and account access</h2>
                            <p>Manage your account security and access settings.</p>
                        </header>
                    </div>
                );
            case 'accessibility':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Accessibility, display, and languages</h2>
                            <p>Customize your accessibility settings and display preferences.</p>
                        </header>
                    </div>
                );
            case 'resources':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Additional resources</h2>
                            <p>Access additional resources and tools to enhance your experience.</p>
                        </header>
                    </div>
                );
            case 'help':
                return (
                    <div className="settings-content">
                        {renderBackButton()}
                        <header className="settings-content-header">
                            <h2>Help Center</h2>
                            <p>Find answers to common questions and get support.</p>
                        </header>
                    </div>
                );
            default:
                return renderAccountContent();
        }
    };

    return (
        <div className="settings-right-section">
            {renderContent()}
        </div>
    );
};

export default SettingsRightSection; 