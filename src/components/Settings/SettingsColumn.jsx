import React, { useState } from 'react';
import { FiChevronRight, FiSearch, FiX } from 'react-icons/fi';
import {
    FiUser, FiShield, FiBell, FiDollarSign, FiStar,
    FiUsers, FiLock, FiGlobe, FiTool, FiHelpCircle
} from 'react-icons/fi';
import './Settings.css';

const settingsMenu = [
    {
        id: 'account',
        label: 'Your account',
        icon: FiUser,
        keywords: ['account', 'profile', 'password', 'data', 'deactivate']
    },
    {
        id: 'monetization',
        label: 'Monetization',
        icon: FiDollarSign,
        keywords: ['money', 'earn', 'revenue', 'income', 'monetize']
    },
    {
        id: 'premium',
        label: 'Premium',
        icon: FiStar,
        keywords: ['premium', 'subscription', 'features', 'upgrade']
    },
    {
        id: 'creator-subscriptions',
        label: 'Creator Subscriptions',
        icon: FiUsers,
        keywords: ['creator', 'subscribe', 'content']
    },
    {
        id: 'security',
        label: 'Security and account access',
        icon: FiLock,
        keywords: ['security', 'access', 'login', 'protection', 'authentication']
    },
    {
        id: 'privacy',
        label: 'Privacy and safety',
        icon: FiShield,
        keywords: ['privacy', 'safety', 'visibility', 'security']
    },
    {
        id: 'notifications',
        label: 'Notifications',
        icon: FiBell,
        keywords: ['notifications', 'alerts', 'preferences', 'push']
    },
    {
        id: 'accessibility',
        label: 'Accessibility, display, and languages',
        icon: FiGlobe,
        keywords: ['accessibility', 'display', 'language', 'font', 'color', 'theme']
    },
    {
        id: 'resources',
        label: 'Additional resources',
        icon: FiTool,
        keywords: ['additional', 'resources']
    },
    {
        id: 'help',
        label: 'Help Center',
        icon: FiHelpCircle,
        keywords: ['help', 'support', 'faq', 'questions', 'contact']
    }
];

const SettingsColumn = ({ onSettingSelect }) => {
    const [selectedPath, setSelectedPath] = useState('account');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSettingSelect = (path) => {
        setSelectedPath(path);
        onSettingSelect(path);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    const filteredMenu = searchQuery
        ? settingsMenu.filter(setting =>
            setting.keywords.some(keyword => keyword.includes(searchQuery.toLowerCase())) ||
            setting.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : settingsMenu;

    return (
        <div className="settings-column">
            <div className="settings-header">
                <h1>Settings</h1>
                <div className="settings-search">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        className="settings-search-input"
                        placeholder="Search settings"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    {searchQuery && (
                        <button className="clear-search" onClick={clearSearch}>
                            <FiX />
                        </button>
                    )}
                </div>
            </div>
            <div className="settings-menu">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            className={`settings-menu-item ${selectedPath === id ? 'active' : ''}`}
                            onClick={() => handleSettingSelect(id)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Icon size={20} />
                                <span>{label}</span>
                            </div>
                            <FiChevronRight className="chevron-icon" />
                        </button>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No settings match your search</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsColumn; 