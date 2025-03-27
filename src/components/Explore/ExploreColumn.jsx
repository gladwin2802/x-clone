import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiBadgeCheck } from 'react-icons/hi';
import { usePosts } from '../../context/PostsContext';
import PostDetailModal from './PostDetailModal';
import './ExploreColumn.css';
import Feed from '../Home/Feed';

const ExploreColumn = () => {
    const { posts } = usePosts();
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedTab, setSelectedTab] = useState('For You');
    const [selectedPostId, setSelectedPostId] = useState(null);

    const selectedPost = posts.find(post => post.id === selectedPostId) || null;

    const handleResultClick = (result) => {
        if (result.type === 'post') {
            setSelectedPostId(result.id);
            setShowSuggestions(false);
        }
    };

    const tabs = ['For You', 'Trending', 'News', 'Sports', 'Entertainment'];

    const onSearch = (value) => {
        if (value.trim() === '') {
            setSearchResults([]);
            setShowSuggestions(false);
            return;
        }

        const uniqueUsers = posts.reduce((acc, post) => {
            if (!acc[post.user.name]) {
                acc[post.user.name] = {
                    type: 'user',
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

        const filteredPosts = posts.filter(post =>
            post.content.toLowerCase().includes(value.toLowerCase()) ||
            post.user.name.toLowerCase().includes(value.toLowerCase())
        ).map(post => ({
            type: 'post',
            ...post
        }));

        const combinedResults = [...filteredUsers, ...filteredPosts];
        setSearchResults(combinedResults);
        setShowSuggestions(true);
    }

    const getFilteredContent = () => {
        if (!posts || posts.length === 0) {
            return <div className="empty-state">
                <h2>No posts yet</h2>
                <p>When available, posts will appear here.</p>
            </div>;
        }
        switch (selectedTab) {
            case 'For You':
                return <Feed posts={posts} />;
            case 'Trending':
                const trendingPosts = posts.filter(post => post.isTrending === true);
                return <Feed posts={trendingPosts} />;
            case 'News':
                const newsPosts = posts.filter(post => post.category === 'News');
                return <Feed posts={newsPosts} />;
            case 'Sports':
                const sportsPosts = posts.filter(post => post.category === 'Sports');
                return <Feed posts={sportsPosts} />;
            case 'Entertainment':
                const entertainmentPosts = posts.filter(post => post.category === 'Entertainment');
                return <Feed posts={entertainmentPosts} />;
            default:
                return <Feed posts={posts} />;
        }
    };

    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <main className="main">
            <header className="main__header">
                <div className="explore-search">
                    <div className="search-container">
                        <FaSearch color="var(--twitter-secondary-text)" size={20} />
                        <input
                            type="text"
                            placeholder="Search people and posts"
                            onChange={(e) => onSearch(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        />
                    </div>
                    <button className="settings-button">
                        <IoSettingsOutline size={20} />
                    </button>
                    {showSuggestions && (
                        <div className="search-suggestions">
                            <div className="suggestions-header">
                                <h3>Search results</h3>
                            </div>
                            {searchResults.length > 0 ? (
                                searchResults.map((result, index) => (
                                    <div
                                        key={index}
                                        className={`suggestion-item ${result.type === 'post' ? 'post-result' : ''}`}
                                        onClick={() => handleResultClick(result)}
                                    >
                                        {result.type === 'user' ? (
                                            <>
                                                <div className="suggestion-avatar-container">
                                                    <img
                                                        src={result.avatar}
                                                        alt={result.name}
                                                        className="suggestion-avatar"
                                                    />
                                                </div>
                                                <div className="suggestion-content">
                                                    <div className="suggestion-name-container">
                                                        <div className="suggestion-name">
                                                            {result.name}
                                                            {result.verified && (
                                                                <HiBadgeCheck color="rgb(29, 155, 240)" size={16} />
                                                            )}
                                                        </div>
                                                        <span className="suggestion-username">{result.username}</span>
                                                        {result.following && (
                                                            <span className="following-status">Following</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="post-result-content">
                                                <div className="post-result-user">
                                                    <img
                                                        src={result.user.profilePicture}
                                                        alt={result.user.name}
                                                        className="post-result-avatar"
                                                    />
                                                    <div className="post-result-user-info">
                                                        <span className="post-result-name">{result.user.name}</span>
                                                        <span className="post-result-username">{result.user.username}</span>
                                                    </div>
                                                </div>
                                                <p className="post-result-text">{truncateText(result.content)}</p>
                                                {result.media && (
                                                    <div className="post-result-thumbnail">
                                                        <img src={result.media.url} alt={result.media.alt} />
                                                    </div>
                                                )}
                                            </div>
                                        )}
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
                <div className="main__tabs">
                    {tabs.map((tabName) => (
                        <div
                            key={tabName}
                            className={`main__tab ${tabName === selectedTab ? 'main__tab--active' : ''}`}
                            onClick={() => setSelectedTab(tabName)}
                        >
                            {tabName}
                        </div>
                    ))}
                </div>
            </header>

            <div className="main__content">
                {getFilteredContent()}
            </div>

            {selectedPost && (
                <PostDetailModal
                    post={selectedPost}
                    onClose={() => setSelectedPostId(null)}
                />
            )}
        </main>
    );
};

export default ExploreColumn;