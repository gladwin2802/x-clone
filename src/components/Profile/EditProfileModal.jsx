import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import { useUser } from '../../context/UserContext';
import './EditProfileModal.css';

const EditProfileModal = ({ onClose }) => {
    const { userDetails, updateUserDetails } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        profilePicture: '',
        bio: ''
    });

    useEffect(() => {
        setFormData({
            name: userDetails.name,
            username: userDetails.username,
            profilePicture: userDetails.profilePicture,
            bio: userDetails.bio || ''
        });
    }, [userDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserDetails(formData);
        onClose();
    };

    return (
        <>
            <div className="edit-profile-overlay" onClick={onClose} />
            <div className="edit-profile-modal">
                <div className="edit-profile-header">
                    <h2>Edit profile</h2>
                    <button className="save-button" onClick={handleSubmit}>
                        Save
                    </button>
                </div>

                <div className="edit-profile-content">
                    <form className="edit-profile-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength={50}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                maxLength={15}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                maxLength={160}
                                placeholder="Tell us about yourself"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProfileModal; 