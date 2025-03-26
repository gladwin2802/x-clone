import React from 'react';
import './Bookmarks.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { usePosts } from '../../context/PostsContext';
import Feed from '../Home/Feed';

const BookmarksColumn = () => {
    const { posts } = usePosts();

    const bookmarkedPosts = posts.filter(post => post.isBookmarked);

    return (
        <div className="bookmarks-column">
            <header className="bookmarks-header">
                <div className="bookmarks-header-content">
                    <div className="header-text">
                        <h2>Bookmarks</h2>
                        <span className="username">@gladwin_a_j</span>
                    </div>
                    <FiMoreHorizontal size={20} />
                </div>
            </header>

            <div className="bookmarks-content">
                {bookmarkedPosts.length > 0 ? (
                    <Feed posts={bookmarkedPosts} />
                ) : (
                    <>
                        <div className="bookmarks-empty-state">
                            <h2>Save posts for later</h2>
                            <p>Bookmark posts to easily find them again in the future.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookmarksColumn; 