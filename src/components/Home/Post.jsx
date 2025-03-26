import React from 'react';
import { usePosts } from '../../context/PostsContext';
import { BsThreeDots } from 'react-icons/bs';
import './Post.css';

const Post = ({ post }) => {
    const { handleLike, handleRetweet, handleReply, handleView, handleBookmark } = usePosts();

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-avatar">
                    <img
                        src={post.user.profilePicture}
                        alt="Profile"
                        className="avatar-img"
                    />
                </div>
                <div className="post-header-info">
                    <div className="post-user-info">
                        <span className="post-name">{post.user.name}</span>
                        {post.user.verified && <span className="verified-badge">✓</span>}
                        <span className="post-username">{post.user.username}</span>
                        <span className="post-time">· {post.timestamp}</span>
                    </div>
                    <button className="post-more-options">
                        <BsThreeDots />
                    </button>
                </div>
            </div>

            <div className="post-content">
                <p className="post-text">{post.content}</p>
                {post.media && (
                    <div className="post-media">
                        <img src={post.media.url} alt={post.media.alt} className="post-image" />
                    </div>
                )}
            </div>

            <div className="post-actions">
                <button
                    className={`post-action-btn reply-btn ${post.isReplied ? 'active' : ''}`}
                    onClick={() => handleReply(post.id)}
                >
                    <i className="bi bi-chat"></i>
                    <span>{post.replies}</span>
                </button>
                <button
                    className={`post-action-btn retweet-btn ${post.isRetweeted ? 'active' : ''}`}
                    onClick={() => handleRetweet(post.id)}
                >
                    <i className="bi bi-repeat"></i>
                    <span>{post.retweets}</span>
                </button>
                <button
                    className={`post-action-btn like-btn ${post.isLiked ? 'active' : ''}`}
                    onClick={() => handleLike(post.id)}
                >
                    <i className="bi bi-heart"></i>
                    <span>{post.likes}</span>
                </button>
                <button
                    className={`post-action-btn view-btn ${post.isViewed ? 'active' : ''}`}
                    onClick={() => handleView(post.id)}
                >
                    <i className="bi bi-bar-chart"></i>
                    <span>{post.views}</span>
                </button>
                <div className="post-action-right">
                    <button
                        className={`post-action-btn bookmark-btn ${post.isBookmarked ? 'active' : ''}`}
                        onClick={() => handleBookmark(post.id)}
                    >
                        <i className="bi bi-bookmark"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;