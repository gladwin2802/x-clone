import { render, screen, act } from '@testing-library/react';
import { PostsProvider, usePosts } from '../PostsContext';
import { UserProvider } from '../UserContext';
import { describe, test, expect, beforeEach, vi } from 'vitest';

vi.mock('axios');
import axios from 'axios';

const TestComponent = () => {
    const { posts, createPost, handleLike, handleRetweet, handleReply, handleView, handleBookmark } = usePosts();
    return (
        <div>
            <div data-testid="posts-count">Posts: {posts.length}</div>
            <button onClick={() => createPost('Test post')}>Create Post</button>
            {posts.length > 0 && (
                <div>
                    <button onClick={() => handleLike(posts[0].id)}>Like First Post</button>
                    <button onClick={() => handleRetweet(posts[0].id)}>Retweet First Post</button>
                    <button onClick={() => handleReply(posts[0].id)}>Reply to First Post</button>
                    <button onClick={() => handleView(posts[0].id)}>View First Post</button>
                    <button onClick={() => handleBookmark(posts[0].id)}>Bookmark First Post</button>
                    <div data-testid="post-stats">
                        Likes: {posts[0].likes} |
                        Retweets: {posts[0].retweets} |
                        Replies: {posts[0].replies} |
                        Views: {posts[0].views} |
                        Bookmarked: {posts[0].isBookmarked ? 'Yes' : 'No'}
                    </div>
                </div>
            )}
        </div>
    );
};

describe('PostsContext', () => {
    beforeEach(() => {
        localStorage.clear();
        axios.get.mockImplementation((url) => {
            if (url === '/data/posts.json') {
                return Promise.resolve({
                    data: [{
                        id: 1,
                        content: 'Test post',
                        user: {
                            name: 'Test User',
                            username: '@testuser'
                        },
                        likes: 0,
                        retweets: 0,
                        replies: 0,
                        views: 0,
                        isLiked: false,
                        isRetweeted: false,
                        isReplied: false,
                        isViewed: false,
                        isBookmarked: false,
                        isUserPost: false
                    }]
                });
            }
            return Promise.resolve({ data: [] });
        });
    });

    test('loads initial posts', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        const postsCount = await screen.findByTestId('posts-count');
        expect(postsCount).toHaveTextContent('Posts: 1');
    });

    test('creates new post', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Create Post').click();
        });

        const postsCount = screen.getByTestId('posts-count');
        expect(postsCount).toHaveTextContent('Posts: 2');
    });

    test('handles post like', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Like First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Likes: 1');
    });

    test('handles post retweet', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Retweet First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Retweets: 1');
    });

    test('handles post reply', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Reply to First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Replies: 1');
    });

    test('handles post view', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('View First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Views: 1');
    });

    test('handles post bookmark', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Bookmark First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Bookmarked: Yes');
    });

    test('toggles post interactions', async () => {
        render(
            <UserProvider>
                <PostsProvider>
                    <TestComponent />
                </PostsProvider>
            </UserProvider>
        );

        await screen.findByTestId('posts-count');

        act(() => {
            screen.getByText('Like First Post').click();
            screen.getByText('Like First Post').click();
        });

        act(() => {
            screen.getByText('Retweet First Post').click();
            screen.getByText('Retweet First Post').click();
        });

        act(() => {
            screen.getByText('Reply to First Post').click();
            screen.getByText('Reply to First Post').click();
        });

        act(() => {
            screen.getByText('Bookmark First Post').click();
            screen.getByText('Bookmark First Post').click();
        });

        const stats = screen.getByTestId('post-stats');
        expect(stats).toHaveTextContent('Likes: 0');
        expect(stats).toHaveTextContent('Retweets: 0');
        expect(stats).toHaveTextContent('Replies: 0');
        expect(stats).toHaveTextContent('Bookmarked: No');
    });
}); 