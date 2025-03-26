import React from 'react';
import './ProfilePopup.css';

const ProfilePopup = ({ onClose, position }) => {
    return (
        <>
            <div className="profile-popup-overlay" onClick={onClose}></div>
            <div
                className="profile-popup"
                style={{
                    bottom: `${position.bottom}px`,
                    left: `${position.left}px`
                }}
            >
                <div className="popup-content">
                    <button className="popup-item">
                        Add an existing account
                    </button>
                    <button className="popup-item logout">
                        Log out @gladwin_a_j
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfilePopup;