import React from 'react';
import { BsX } from 'react-icons/bs';
import Post from '../Home/Post';
import './PostDetailModal.css';

const PostDetailModal = ({ post, onClose }) => {

    return (
        <div className="post-detail-modal">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className="post-detail-content">
                <button className="close-button" onClick={onClose}>
                    <BsX size={24} />
                </button>
                <br />
                <Post key={post.id} post={post} />
            </div>
        </div>
    );
};

export default PostDetailModal; 