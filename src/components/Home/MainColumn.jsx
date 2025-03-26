import React, { useState } from 'react';
import { FaImage, FaRegSmile } from 'react-icons/fa';
import { BsFiletypeGif } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Feed from './Feed';
import PostModal from './PostModal';
import { usePosts } from '../../context/PostsContext';
import './MainColumn.css';

const MainColumn = ({ tab, setTab }) => {
    const tabs = ['For you', 'Following'];
    const { posts } = usePosts();
    const [showPostModal, setShowPostModal] = useState(false);
    const [postText, setPostText] = useState('');
    const [hasImage, setHasImage] = useState(false);

    const filteredPosts = posts.filter(post => {
        if (tab === 'Following') {
            return post.isFollowed;
        }
        return true;
    });

    const handlePostClick = () => {
        setShowPostModal(true);
    };

    const handleCloseModal = () => {
        setShowPostModal(false);
        setPostText('');
        setHasImage(false);
    };

    return (
        <main className="main">
            <header className="main__header">
                <div className="main__tabs">
                    {tabs.map((tabName) => (
                        <div
                            key={tabName}
                            className={`main__tab ${tab === tabName ? 'main__tab--active' : ''}`}
                            onClick={() => setTab(tabName)}
                        >
                            {tabName}
                        </div>
                    ))}
                </div>
            </header>

            <div className="main__content">
                <div className="compose">
                    <img
                        src="https://robohash.org/gladwin?set=set4"
                        alt="Profile"
                        className="compose__avatar"
                    />
                    <div className="compose__input-container">
                        <input
                            type="text"
                            className="compose__input"
                            placeholder="What's happening?"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            onClick={handlePostClick}
                            readOnly
                        />
                        <div className="compose__buttons">
                            <div className="compose__actions">
                                <FaImage
                                    style={{ cursor: 'pointer' }}
                                    className={hasImage ? 'active' : ''}
                                    onClick={() => setHasImage(!hasImage)}
                                />
                                <BsFiletypeGif style={{ cursor: 'pointer' }} />
                                <BiPoll style={{ cursor: 'pointer' }} />
                                <FaRegSmile style={{ cursor: 'pointer' }} />
                                <AiOutlineSchedule style={{ cursor: 'pointer' }} />
                                <HiOutlineLocationMarker style={{ cursor: 'pointer' }} />
                            </div>
                            <button
                                className="compose__post-button"
                                onClick={handlePostClick}
                                disabled={!postText.trim()}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>

                <Feed posts={filteredPosts} />

                {showPostModal && (
                    <PostModal
                        onClose={handleCloseModal}
                        initialText={postText}
                        initialHasImage={hasImage}
                    />
                )}
            </div>
        </main>
    );
};

export default MainColumn;