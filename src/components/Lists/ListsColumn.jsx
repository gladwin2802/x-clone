import React, { useState } from 'react';
import './Lists.css';
import { FiSettings, FiBookmark, FiHeart, FiUsers, FiArrowLeft } from 'react-icons/fi';
import { usePosts } from '../../context/PostsContext';
import Feed from '../Home/Feed';

const ListsColumn = () => {
    const [activeTab, setActiveTab] = useState('pinned');
    const [selectedList, setSelectedList] = useState(null);
    const { posts } = usePosts();

    const bookmarkedPosts = posts.filter(post => post.isBookmarked);
    const likedPosts = posts.filter(post => post.isLiked);
    const followingPosts = posts.filter(post => post.isFollowed);

    const lists = [
        { id: 'bookmarks', name: 'Bookmarks', icon: <FiBookmark />, posts: bookmarkedPosts },
        { id: 'liked', name: 'Liked', icon: <FiHeart />, posts: likedPosts },
        { id: 'following', name: 'Following', icon: <FiUsers />, posts: followingPosts }
    ];

    const getSelectedPosts = () => {
        const selectedListData = lists.find(list => list.id === selectedList);
        return selectedListData ? selectedListData.posts : [];
    };

    const handleBack = () => {
        setSelectedList(null);
    };

    return (
        <main className="main">
            <div className="lists-column">
                <header className="lists-header">
                    <div className="lists-header-content">
                        {selectedList ? (
                            <div className="header-with-back">
                                <button className="back-button" onClick={handleBack}>
                                    <FiArrowLeft size={20} />
                                </button>
                                <h2>{lists.find(list => list.id === selectedList)?.name}</h2>
                            </div>
                        ) : (
                            <>
                                <h2>Lists</h2>
                                <FiSettings size={20} />
                            </>
                        )}
                    </div>
                    {!selectedList && (
                        <div className="lists-tabs">
                            <button
                                className={`lists-tab ${activeTab === 'pinned' ? 'active' : ''}`}
                                onClick={() => setActiveTab('pinned')}
                            >
                                Pinned
                            </button>
                            <button
                                className={`lists-tab ${activeTab === 'your-lists' ? 'active' : ''}`}
                                onClick={() => setActiveTab('your-lists')}
                            >
                                Your Lists
                            </button>
                        </div>
                    )}
                </header>

                <div className="lists-content">
                    {selectedList ? (
                        <div className="list-posts">
                            {getSelectedPosts().length > 0 ? (
                                <Feed posts={getSelectedPosts()} />
                            ) : (
                                <div className="lists-empty-state">
                                    {lists.find(list => list.id === selectedList)?.icon}
                                    <h2>No {selectedList} posts yet</h2>
                                    <p>Posts will appear here when you {selectedList} them.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        activeTab === 'pinned' ? (
                            <>
                                <div className="lists-empty-state">
                                    <h2>Pin your favorite Lists</h2>
                                    <p>Pin up to five Lists you want to easily access.</p>
                                </div>

                                <div className="discover-lists">
                                    <h3>Discover new Lists</h3>
                                    <div className="lists-suggestions">
                                        <div className="list-suggestion-card">
                                            <div className="list-info">
                                                <h4>Technology News</h4>
                                                <p>Created by @TechDaily</p>
                                            </div>
                                            <button className="follow-list-button">Follow</button>
                                        </div>
                                        <div className="list-suggestion-card">
                                            <div className="list-info">
                                                <h4>Web Development</h4>
                                                <p>Created by @DevCommunity</p>
                                            </div>
                                            <button className="follow-list-button">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="lists-grid">
                                {lists.map(list => (
                                    <div
                                        key={list.id}
                                        className="list-card"
                                        onClick={() => setSelectedList(list.id)}
                                    >
                                        <div className="list-card-icon">
                                            {list.icon}
                                        </div>
                                        <div className="list-card-info">
                                            <h3>{list.name}</h3>
                                            <p>{list.posts.length} posts</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </main>
    );
};

export default ListsColumn;