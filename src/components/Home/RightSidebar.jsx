import React, { useState } from 'react';
import { FaSearch, FaEllipsisH } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import { usePosts } from '../../context/PostsContext';
import './RightSidebar.css';

const RightSidebar = ({ isExplore }) => {
    const { posts } = usePosts();
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const trends = [
        {
            category: 'Entertainment · LIVE',
            title: 'Khloé in Wonder Land',
        },
        {
            category: 'Cricket · Trending',
            title: 'Rishabh Pant',
            subtitle: 'ऋषभ पंत',
            posts: '2,632 posts'
        },
        {
            category: 'Cricket · Trending',
            title: 'David Warner',
            posts: '2,632 posts'
        },
        {
            category: 'Entertainment · Trending',
            hashtag: '#JrNTR',
            posts: '18.1K posts'
        },
        {
            category: 'Trending in India',
            hashtag: '#earthquake',
            posts: '5,866 posts'
        }
    ];

    const whoToFollow = [
        {
            name: 'Entertainment Tonight',
            username: '@etnow',
            verified: true,
            avatar: 'https://robohash.org/etnow?set=set4&size=40x40'
        },
        {
            name: 'Apple',
            username: '@Apple',
            verified: true,
            avatar: 'https://robohash.org/apple?set=set4&size=40x40'
        },
        {
            name: 'AmiAmi English',
            username: '@AmiAmi_English',
            verified: true,
            avatar: 'https://robohash.org/amiami?set=set4&size=40x40'
        }
    ];

    const onSearch = (value) => {
        if (value.trim() === '') {
            setSearchResults([]);
            setShowSuggestions(false);
            return;
        }

        const uniqueUsers = posts.reduce((acc, post) => {
            if (!acc[post.user.name]) {
                acc[post.user.name] = {
                    name: post.user.name,
                    username: `@${post.user.name.toLowerCase().replace(/\s+/g, '')}`,
                    avatar: `https://robohash.org/${post.user.name.toLowerCase().replace(/\s+/g, '')}?set=set4&size=40x40`,
                    verified: true,
                    following: true
                };
            }
            return acc;
        }, {});

        const filteredUsers = Object.values(uniqueUsers).filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.username.toLowerCase().includes(value.toLowerCase())
        );

        setSearchResults(filteredUsers);
        setShowSuggestions(true);
    }

    return (
        <div className="right-sidebar">
            {!isExplore && (
                <div className="search">
                    <div className="search-container">
                        <FaSearch color="var(--twitter-secondary-text)" size={20} />
                        <input
                            type="text"
                            placeholder="Search people"
                            onChange={(e) => onSearch(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        />
                    </div>
                    {showSuggestions && (
                        <div className="search-suggestions">
                            <div className="suggestions-header">
                                <h3>Search results</h3>
                            </div>
                            {searchResults.length > 0 ? (
                                searchResults.map((user, index) => (
                                    <div key={index} className="suggestion-item">
                                        <div className="suggestion-avatar-container">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="suggestion-avatar"
                                            />
                                        </div>
                                        <div className="suggestion-content">
                                            <div className="suggestion-name-container">
                                                <div className="suggestion-name">
                                                    {user.name}
                                                    {user.verified && (
                                                        <HiBadgeCheck color="rgb(29, 155, 240)" size={16} />
                                                    )}
                                                </div>
                                                <span className="suggestion-username">{user.username}</span>
                                                {user.following && (
                                                    <span className="following-status">Following</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-results">
                                    <FaSearch color="var(--twitter-secondary-text)" size={16} />
                                    <span>No results found</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            <div style={{ marginTop: '12px' }}>
                <div className="premium-card">
                    <h2>Subscribe to Premium</h2>
                    <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button>Subscribe</button>
                </div>

                <div className="whats-happening">
                    <h2>What's happening</h2>
                    {trends.map((trend, index) => (
                        <div key={index} className="trend-item">
                            <div className="trend-content">
                                <div className="trend-category">{trend.category}</div>
                                <div className="trend-title">{trend.title || trend.hashtag}</div>
                                {trend.subtitle && (
                                    <div className="trend-title">{trend.subtitle}</div>
                                )}
                                {trend.posts && (
                                    <div className="trend-posts">{trend.posts}</div>
                                )}
                            </div>
                            {trend.image && (
                                <img
                                    src={trend.image}
                                    alt={trend.title}
                                    className="trend-image"
                                />
                            )}
                            <div style={{ marginLeft: '8px', color: 'var(--twitter-secondary-text)' }}>
                                <FaEllipsisH />
                            </div>
                        </div>
                    ))}
                    <button className="show-more">Show more</button>
                </div>

                <div className="who-to-follow">
                    <h2>Who to follow</h2>
                    {whoToFollow.map((user, index) => (
                        <div key={index} className="follow-item">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="follow-avatar"
                            />
                            <div className="follow-content">
                                <div className="follow-name">
                                    {user.name}
                                    {user.verified && (
                                        <HiBadgeCheck color="var(--twitter-blue)" size={16} />
                                    )}
                                </div>
                                <div className="follow-username">{user.username}</div>
                            </div>
                            <button className="follow-button">Follow</button>
                        </div>
                    ))}
                    <button className="show-more">Show more</button>
                </div>

                <div className="footer">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Ads info</a>
                    <a href="#">More ···</a>
                    <div style={{ marginTop: '4px' }}>© 2024 X Corp.</div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;