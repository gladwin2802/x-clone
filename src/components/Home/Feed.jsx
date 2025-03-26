import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;