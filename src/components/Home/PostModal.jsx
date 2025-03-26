import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import { FiImage, FiGift, FiCalendar, FiMapPin, FiSmile } from 'react-icons/fi';
import { usePosts } from '../../context/PostsContext';
import './PostModal.css';

const PostModal = ({ onClose, initialText = '', initialHasImage = false }) => {
    const [postText, setPostText] = useState(initialText);
    const [hasImage, setHasImage] = useState(initialHasImage);
    const { createPost } = usePosts();

    useEffect(() => {
        setPostText(initialText);
        setHasImage(initialHasImage);
    }, [initialText, initialHasImage]);

    const handleSubmit = () => {
        if (postText.trim()) {
            createPost(postText, hasImage);
            setPostText('');
            setHasImage(false);
            onClose();
        }
    };

    return (
        <>
            <div className="post-modal-overlay" onClick={onClose} />
            <div className="post-modal-container">
                <div className="post-modal-header">
                    <div className="post-modal-draft-label">Drafts</div>
                    <button className="post-modal-close-button" onClick={onClose}>
                        <BsX size={20} />
                    </button>
                </div>

                <div className="post-modal-content">
                    <div className="post-modal-input-section">
                        <img
                            src="https://robohash.org/gladwin?set=set4"
                            alt="Profile"
                            className="post-modal-profile-image"
                        />
                        <div className="post-modal-input-container">
                            <textarea
                                placeholder="What's happening?"
                                className="post-modal-textarea"
                                value={postText}
                                onChange={(e) => setPostText(e.target.value)}
                                autoFocus
                            />
                            {hasImage && (
                                <div className="post-modal-image-preview">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwli79UXcuAzVah3IsKm4odDDcK9bZ03fvIg&s" alt="Preview" />
                                    <button
                                        className="remove-image-button"
                                        onClick={() => setHasImage(false)}
                                    >
                                        <BsX />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="post-modal-footer">
                        <div className="post-modal-actions">
                            <button
                                className={`post-modal-action-button ${hasImage ? 'active' : ''}`}
                                onClick={() => setHasImage(!hasImage)}
                            >
                                <FiImage size={18} />
                            </button>
                            <button className="post-modal-action-button">
                                <FiGift size={18} />
                            </button>
                            <button className="post-modal-action-button">
                                <FiCalendar size={18} />
                            </button>
                            <button className="post-modal-action-button">
                                <FiMapPin size={18} />
                            </button>
                            <button className="post-modal-action-button">
                                <FiSmile size={18} />
                            </button>
                        </div>
                        <button
                            className="post-modal-submit-button"
                            disabled={!postText.trim()}
                            onClick={handleSubmit}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostModal; 