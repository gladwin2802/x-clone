import React, { useRef } from 'react';
import { RiHome7Fill } from 'react-icons/ri';
import { FiSearch, FiBell, FiMail, FiUser, FiMoreHorizontal, FiList, FiBookmark } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsTwitterX, BsThreeDots } from 'react-icons/bs';
import useScreenSize from '../../hooks/useScreenSize';
import './LeftSidebar.css';

const LeftSidebar = ({ onNavigate, currentPage, onPostClick, onProfileClick }) => {
    const profileRef = useRef(null);
    const { isMobile } = useScreenSize();

    const handleProfileClick = () => {
        if (profileRef.current) {
            const rect = profileRef.current.getBoundingClientRect();
            onProfileClick({
                bottom: window.innerHeight - rect.top + 10,
                left: rect.left
            });
        }
    };

    const menuItems = [
        { icon: <RiHome7Fill size={26} />, text: 'Home', page: 'home' },
        { icon: <FiSearch size={26} />, text: 'Explore', page: 'explore' },
        { icon: <FiBell size={26} />, text: 'Notifications', page: 'notifications' },
        { icon: <FiMail size={26} />, text: 'Messages', page: 'messages' },
        { icon: <HiOutlineUsers size={26} />, text: 'Communities', page: 'communities' },
        { icon: <FiList size={26} />, text: 'Lists', page: 'lists' },
        { icon: <FiBookmark size={26} />, text: 'Bookmarks', page: 'bookmarks' },
        { icon: <FiUser size={26} />, text: 'Profile', page: 'profile' },
        { icon: <FiMoreHorizontal size={26} />, text: 'Settings', page: 'settings' }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar__logo">
                    <BsTwitterX size={30} />
                </div>
                <nav>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`sidebar-item ${currentPage === item.page ? 'sidebar-item--active' : ''}`}
                            onClick={() => onNavigate(item.page)}
                        >
                            <div style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {item.icon}
                            </div>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </nav>
                {!isMobile && (
                    <button
                        className="post-button"
                        onClick={onPostClick}
                    >
                        Post
                    </button>
                )}
            </div>
            <div
                className="profile-section"
                onClick={handleProfileClick}
                ref={profileRef}
            >
                <img
                    src="https://robohash.org/gladwin?set=set4"
                    alt="Profile"
                    className="profile-image"
                />
                <div className="profile-info">
                    <span className="profile-name">GLADWIN A J</span>
                    <span className="profile-handle">@gladwin_a_j</span>
                </div>
                <BsThreeDots className="three-dots" />
            </div>
        </div>
    );
};

export default LeftSidebar;