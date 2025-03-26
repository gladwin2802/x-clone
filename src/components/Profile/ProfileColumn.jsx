import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import { useUser } from '../../context/UserContext';
import { usePosts } from '../../context/PostsContext';
import EditProfileModal from './EditProfileModal';
import Feed from '../Home/Feed';
import './ProfileColumn.css';

const ProfileColumn = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [activeTab, setActiveTab] = useState('posts');
    const { userDetails } = useUser();
    const { posts } = usePosts();

    const userPosts = posts.filter(post => post.user.name === userDetails.name);
    const likedPosts = posts.filter(post => post.isLiked);

    console.log(posts);
    console.log(userDetails);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'posts':
                return userPosts.length > 0 ? (
                    <Feed posts={userPosts} />
                ) : (
                    <div className="empty-state">
                        <h2>No posts yet</h2>
                        <p>When you post, they will appear here.</p>
                    </div>
                );
            case 'replies':
                return (
                    <div className="empty-state">
                        <h2>No replies yet</h2>
                        <p>When you reply to posts, they will appear here.</p>
                    </div>
                );
            case 'highlights':
                return (
                    <div className="empty-state">
                        <h2>No highlights yet</h2>
                        <p>When you highlight posts, they will appear here.</p>
                    </div>
                );
            case 'articles':
                return (
                    <div className="empty-state">
                        <h2>No articles yet</h2>
                        <p>When you write articles, they will appear here.</p>
                    </div>
                );
            case 'media':
                return (
                    <div className="empty-state">
                        <h2>No media yet</h2>
                        <p>When you post media, it will appear here.</p>
                    </div>
                );
            case 'likes':
                return likedPosts.length > 0 ? (
                    <Feed posts={likedPosts} />
                ) : (
                    <div className="empty-state">
                        <h2>No likes yet</h2>
                        <p>Posts you like will appear here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="main">
            <div>

                <div className="profile-header">
                    <div className="header-left">
                        <div className="header-title">
                            <h2>{userDetails.name}</h2>
                            <span className="post-count">{userPosts.length} posts</span>
                        </div>
                    </div>
                </div>

                <div className="profile-info-section">
                    <div className="profile-banner" style={{ backgroundImage: 'url(https://i.etsystatic.com/34466454/r/il/3ffa97/4635429584/il_570xN.4635429584_li5d.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>

                    <div className="profile-details">
                        <div className="profile-avatar-container">
                            <img
                                src={userDetails.profilePicture}
                                alt="Profile"
                                className="profile-page-avatar"
                            />
                        </div>
                        <button
                            className="edit-profile-button"
                            onClick={() => setShowEditModal(true)}
                        >
                            Edit profile
                        </button>
                    </div>

                    <div className="profile-bio">
                        <h2>{userDetails.name}</h2>
                        <span className="profile-handle">{userDetails.username}</span>
                        <div className="join-date">
                            <span>Joined {userDetails.joinDate}</span>
                        </div>
                        <div className="profile-bio-content">
                            <p>{userDetails.bio}</p>
                        </div>
                        <div className="profile-stats">
                            <span><strong>{userDetails.following}</strong> Following</span>
                            <span><strong>{userDetails.followers}</strong> Followers</span>
                        </div>
                    </div>

                    <div className="verification-banner">
                        <div className="verification-content">
                            <div className="verification-text">
                                <h2>Not verified yet <FaCheck /></h2>
                                <br />
                                <p>Get verified for boosted replies, analytics, ad-free browsing, and more. Upgrade your profile now.</p>
                            </div>
                            <button className="get-verified-button">Get verified</button>
                            <button className="close-banner" aria-label="Close">
                                <BsX size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="profile-tabs">
                        <button
                            className={`profile-tab ${activeTab === 'posts' ? 'active' : ''}`}
                            onClick={() => setActiveTab('posts')}
                        >
                            Posts
                        </button>
                        <button
                            className={`profile-tab ${activeTab === 'replies' ? 'active' : ''}`}
                            onClick={() => setActiveTab('replies')}
                        >
                            Replies
                        </button>
                        <button
                            className={`profile-tab ${activeTab === 'highlights' ? 'active' : ''}`}
                            onClick={() => setActiveTab('highlights')}
                        >
                            Highlights
                        </button>
                        <button
                            className={`profile-tab ${activeTab === 'articles' ? 'active' : ''}`}
                            onClick={() => setActiveTab('articles')}
                        >
                            Articles
                        </button>
                        <button
                            className={`profile-tab ${activeTab === 'media' ? 'active' : ''}`}
                            onClick={() => setActiveTab('media')}
                        >
                            Media
                        </button>
                        <button
                            className={`profile-tab ${activeTab === 'likes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('likes')}
                        >
                            Likes
                        </button>
                    </div>
                </div>

                <div className="profile-content">
                    {renderTabContent()}
                </div>

                {showEditModal && (
                    <EditProfileModal onClose={() => setShowEditModal(false)} />
                )}
            </div>
        </div>
    );
};

export default ProfileColumn; 