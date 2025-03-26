import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { usePosts } from '../../context/PostsContext';
import Feed from '../Home/Feed';
import './CommunitiesColumn.css';

const CommunitiesColumn = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { posts } = usePosts();
    const categories = ['All', 'Sports', 'Technology', 'News', 'Entertainment'];

    const filteredPosts = posts.filter(post => {
        if (activeCategory === 'All') {
            return true;
        }
        return post.category === activeCategory;
    });

    return (
        <div className="main">
            <header className="main__header">
                <div className="communities-header">
                    <div className="header-left">
                        <h2>Communities</h2>
                    </div>
                    <div className="header-icons">
                        <button className="icon-button">
                            <FiSearch size={20} />
                        </button>
                        <button className="icon-button">
                            <IoSettingsOutline size={20} />
                        </button>
                    </div>
                </div>
                <div className="categories-scroll">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-button ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </header>

            <div className="main__content">
                <div className="communities-content">
                    {filteredPosts.length > 0 ? (
                        <Feed posts={filteredPosts} />
                    ) : (
                        <div className="empty-state">
                            <h3>No posts in this category</h3>
                            <p>There are currently no posts in the {activeCategory} category.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommunitiesColumn; 