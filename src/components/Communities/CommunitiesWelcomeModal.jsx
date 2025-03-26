import React from 'react';
import { IoClose } from 'react-icons/io5';
import { BsStars } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';

const CommunitiesWelcomeModal = ({ onClose, onCheckItOut }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    <IoClose size={20} />
                </button>
                <h1>Welcome to Communities</h1>
                <p>Communities are moderated discussion groups where people on X can connect and share.</p>

                <div className="modal-features">
                    <div className="modal-feature">
                        <div className="feature-icon">
                            <BsStars size={24} />
                        </div>
                        <div className="feature-text">
                            <h3>Meet others with your interests</h3>
                            <p>Join Communities to connect with people who share your interests.</p>
                        </div>
                    </div>

                    <div className="modal-feature">
                        <div className="feature-icon">
                            <HiOutlineUserGroup size={24} />
                        </div>
                        <div className="feature-text">
                            <h3>Post directly to a Community</h3>
                            <p>Your posts are shared with Community members and your followers.</p>
                        </div>
                    </div>

                    <div className="modal-feature">
                        <div className="feature-icon">
                            <AiOutlineHeart size={24} />
                        </div>
                        <div className="feature-text">
                            <h3>Get backup when you need it</h3>
                            <p>Admins and moderators help manage Communities and keep conversations on track.</p>
                        </div>
                    </div>
                </div>

                <button className="check-it-out-button" onClick={onCheckItOut}>
                    Check it out
                </button>
            </div>
        </div>
    );
};

export default CommunitiesWelcomeModal; 