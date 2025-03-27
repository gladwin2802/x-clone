import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

const PostsContext = createContext();

const STORAGE_KEY = 'user_posts';
const INTERACTIONS_KEY = 'user_interactions';

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const { userDetails } = useUser();

    useEffect(() => {
        const storedPosts = localStorage.getItem(STORAGE_KEY);
        const storedInteractions = localStorage.getItem(INTERACTIONS_KEY);
        let userPosts = [];
        let userInteractions = [];

        if (storedPosts) {
            try {
                userPosts = JSON.parse(storedPosts);
            } catch (error) {
                console.error('Error parsing stored posts:', error);
            }
        }

        if (storedInteractions) {
            try {
                userInteractions = JSON.parse(storedInteractions);
            } catch (error) {
                console.error('Error parsing stored interactions:', error);
            }
        }

        axios.get('/data/posts.json')
            .then(response => {
                const jsonPosts = Array.isArray(response.data) ? response.data : [];
                const mergedPosts = jsonPosts.map(post => {
                    const interactedPost = userInteractions.find(p => p.id === post.id);
                    return interactedPost || post;
                });
                setPosts([...userPosts, ...mergedPosts]);

                axios.get('/data/additional.json')
                    .then(additionalResponse => {
                        const additionalPosts = Array.isArray(additionalResponse.data) ? additionalResponse.data : [];

                        additionalPosts.forEach((post, index) => {
                            setTimeout(() => {
                                setPosts(prevPosts => {
                                    const interactedPost = userInteractions.find(p => p.id === post.id);
                                    const postToAdd = interactedPost || post;
                                    return [postToAdd, ...prevPosts];
                                });
                            }, (index + 1) * 5000);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching additional posts:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setPosts([...userPosts, ...userInteractions]);
            });
    }, []);

    useEffect(() => {
        const userPosts = posts.filter(post => post.isUserPost);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userPosts));
        const interactedPosts = posts.filter(post =>
            !post.isUserPost && (
                post.isLiked ||
                post.isBookmarked ||
                post.isRetweeted ||
                post.isReplied
            )
        );
        localStorage.setItem(INTERACTIONS_KEY, JSON.stringify(interactedPosts));
    }, [posts]);

    const createPost = useCallback((content, hasImage = false) => {
        const newPost = {
            id: Date.now(),
            user: {
                name: userDetails.name,
                username: userDetails.username,
                verified: userDetails.verified,
                profilePicture: userDetails.profilePicture
            },
            content: content,
            timestamp: "now",
            media: hasImage ? {
                type: "image",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwli79UXcuAzVah3IsKm4odDDcK9bZ03fvIg&s",
                alt: "User uploaded image"
            } : null,
            replies: 0,
            retweets: 0,
            likes: 0,
            views: 0,
            isLiked: false,
            isRetweeted: false,
            isReplied: false,
            isViewed: false,
            isBookmarked: false,
            isFollowed: false,
            isTrending: false,
            category: "General",
            isUserPost: true
        };

        setPosts(prevPosts => [newPost, ...prevPosts]);
        return newPost;
    }, [userDetails]);

    const handleLike = useCallback((postId) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                const newIsLiked = !post.isLiked;
                return {
                    ...post,
                    isLiked: newIsLiked,
                    likes: post.likes + (newIsLiked ? 1 : -1)
                };
            }
            return post;
        }));
    }, []);

    const handleRetweet = useCallback((postId) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                const newIsRetweeted = !post.isRetweeted;
                return {
                    ...post,
                    isRetweeted: newIsRetweeted,
                    retweets: post.retweets + (newIsRetweeted ? 1 : -1)
                };
            }
            return post;
        }));
    }, []);

    const handleReply = useCallback((postId) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                const newIsReplied = !post.isReplied;
                return {
                    ...post,
                    isReplied: newIsReplied,
                    replies: post.replies + (newIsReplied ? 1 : -1)
                };
            }
            return post;
        }));
    }, []);

    const handleView = useCallback((postId) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isViewed: true,
                    views: typeof post.views === 'string'
                        ? post.views
                        : post.views + 1
                };
            }
            return post;
        }));
    }, []);

    const handleBookmark = useCallback((postId) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isBookmarked: !post.isBookmarked
                };
            }
            return post;
        }));
    }, []);

    const value = useMemo(() => ({
        posts,
        setPosts,
        createPost,
        handleLike,
        handleRetweet,
        handleReply,
        handleView,
        handleBookmark
    }), [
        posts,
        createPost,
        handleLike,
        handleRetweet,
        handleReply,
        handleView,
        handleBookmark
    ]);

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
}; 