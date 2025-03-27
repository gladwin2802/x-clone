# X-Clone

# Social Media Application

A modern social media application built with React Vite, featuring real-time updates, interactive posts, and a responsive design. Check out the [Live Demo](https://x-social-media-platform.netlify.app/) to explore its capabilities.

## Features

- Responsive design that works on desktop and mobile devices
- Interactive post actions (like, retweet, reply, bookmark)
- Dynamic content loading
- Media support in posts
- Modal view for post details
- Persistent storage for user interactions

## Technologies Used

- **React**: For building the user interface with a component-based approach
- **CSS3**: For custom styling and responsive layouts
- **Bootstrap Icons**: For a modern and consistent icon set
- **Local Storage**: For persisting user interactions across sessions

## Main pages and thier roles

- **Home**: The central hub where users can view their personalized feed, interact with posts, and create new content.
- **Explore**: A discovery page where users can find trending topics, search for posts or users, and explore new content.
- **Notifications**: Keeps users updated on interactions with their content, such as likes, retweets, and mentions.
- **Messages**: Facilitates private, direct communication between users to enhance engagement.
- **Lists**: Helps users organize followed accounts into custom lists for streamlined content consumption.
- **Bookmarks**: Enables users to save posts for later, creating a personalized collection of content.
- **Profile**: Showcases the user's identity, their posts, and engagement metrics, acting as their public presence.
- **Communities**: Encourages group interactions and discussions based on shared interests.
- **Settings**: Provides control over account preferences, privacy settings, and notifications.

## Components Created and Usage

The application is built using a modular, component-based architecture. Below are the key components and their purposes:

- **Home**: 
  - `Feed.jsx`: Shows the post list.
  - `LeftSidebar.jsx`: Navigation and user info.
  - `MainColumn.jsx`: Main area with feed and post form.
  - `Post.jsx`: Individual post with actions (like, retweet).
  - `PostModal.jsx`: Modal for post details.
  - `RightSidebar.jsx`: Trending topics or suggestions.

- **Explore**: 
  - `ExploreColumn.jsx`: Trending posts and search.
  - `PostDetailModal.jsx`: Modal for post details.

- **Notifications**: 
  - `NotificationColumn.jsx`: Lists notifications.

- **Messages**: 
  - `MessagesColumn.jsx`: Messaging interface.
  - `MessageRightSection.jsx`: Conversation details.

- **Bookmarks**: 
  - `BookmarksColumn.jsx`: Bookmarked posts.

- **Lists**: 
  - `ListsColumn.jsx`: User-created lists.

- **Profile**: 
  - `ProfileColumn.jsx`: User profile and posts.
  - `EditProfileModal.jsx`: Edit profile modal.
  - `ProfilePopup.jsx`: Quick profile actions.

- **Communities**: 
  - `CommunitiesColumn.jsx`: Community content.
  - `CommunitiesWelcomeModal.jsx`: Welcome modal.

- **Settings**: 
  - `SettingsColumn.jsx`: Account settings.
  - `SettingsRightSection.jsx`: Extra settings info.

- **Mobile**: 
  - `MobileHeader.jsx`: Mobile-optimized header.

These components are combined to form the application's pages, ensuring reusability and maintainability.

## GitHub Repository

The source code for this project : `https://github.com/gladwin2802/x-clone` 

## Getting Started

### Prerequisites

- **Node.js**: Version 14 or higher
- **npm or Yarn**: Package manager for installing dependencies

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gladwin2802/x-clone
   ```
2. Navigate to the project directory:
    ```bash
    cd x-clone
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
The application will launch in your default browser at http://localhost:5173.

## Project Structure
### Folder Structure
```bash
src/
┣ components/            # All React components
┃ ┣ Bookmarks/           # Bookmark-related components
┃ ┃ ┣ Bookmarks.css
┃ ┃ ┗ BookmarksColumn.jsx
┃ ┣ Communities/         # Community-related components
┃ ┃ ┣ CommunitiesColumn.css
┃ ┃ ┣ CommunitiesColumn.jsx
┃ ┃ ┗ CommunitiesWelcomeModal.jsx
┃ ┣ Explore/             # Explore page components
┃ ┃ ┣ ExploreColumn.css
┃ ┃ ┣ ExploreColumn.jsx
┃ ┃ ┣ PostDetailModal.css
┃ ┃ ┗ PostDetailModal.jsx
┃ ┣ Home/                # Home page components
┃ ┃ ┣ Feed.jsx
┃ ┃ ┣ LeftSidebar.css
┃ ┃ ┣ LeftSidebar.jsx
┃ ┃ ┣ MainColumn.css
┃ ┃ ┣ MainColumn.jsx
┃ ┃ ┣ Post.css
┃ ┃ ┣ Post.jsx
┃ ┃ ┣ PostModal.css
┃ ┃ ┣ PostModal.jsx
┃ ┃ ┣ RightSidebar.css
┃ ┃ ┗ RightSidebar.jsx
┃ ┣ Lists/               # List management components
┃ ┃ ┣ Lists.css
┃ ┃ ┗ ListsColumn.jsx
┃ ┣ Messages/            # Messaging components
┃ ┃ ┣ MessageRightSection.jsx
┃ ┃ ┣ Messages.css
┃ ┃ ┗ MessagesColumn.jsx
┃ ┣ Mobile/              # Mobile-specific components
┃ ┃ ┣ MobileHeader.css
┃ ┃ ┗ MobileHeader.jsx
┃ ┣ Notification/        # Notification components
┃ ┃ ┣ NotificationColumn.css
┃ ┃ ┗ NotificationColumn.jsx
┃ ┣ Profile/             # Profile-related components
┃ ┃ ┣ EditProfileModal.css
┃ ┃ ┣ EditProfileModal.jsx
┃ ┃ ┣ ProfileColumn.css
┃ ┃ ┣ ProfileColumn.jsx
┃ ┃ ┣ ProfilePopup.css
┃ ┃ ┗ ProfilePopup.jsx
┃ ┗ Settings/            # Settings components
┃   ┣ Settings.css
┃   ┣ SettingsColumn.jsx
┃   ┗ SettingsRightSection.jsx
┣ context/               # React contexts for state management
┃ ┣ PostsContext.jsx
┃ ┗ UserContext.jsx
┣ data/                  # JSON data files
┃ ┣ additional.json
┃ ┗ posts.json
┣ hooks/                 # Custom React hooks
┃ ┗ useScreenSize.js
┣ App.css                # Main application styles
┣ App.jsx                # Root application component
┣ main.jsx               # Entry point for React
┗ variables.css          # CSS variables for consistent styling
```

### Best Practices

- **Component-Based Architecture:**  Reusable components for modularity and simplify maintenance.
- **State Management:** React contexts handle global state, optimized with `useMemo` and `useCallback`.
- **Responsive Design:** CSS media queries and flexible layouts ensure compatibility across devices.
- **Data Persistence:** Local Storage preserves user interactions for a consistent experience.
- **Code Organization:** Components are grouped by feature, improving navigation and scalability.
- **Custom Hooks:** useScreenSize.js provides reusable logic for responsive design.
- **Styling:** Custom CSS with Bootstrap Icons ensures a cohesive, modern interface.

### API/JSON Documentation

The application uses JSON files (posts.json, additional.json) in the data/ directory to store post data. Below is the structure of a post:
```code
{
    "id": number,               // Unique identifier for the post
    "user": {
        "name": string,         // User's full name
        "username": string,     // User's handle
        "verified": boolean,    // Verification status
        "profilePicture": string // URL to profile image
    },
    "content": string,          // Post text
    "timestamp": string,        // Post creation time
    "media": {
        "type": string,         // Media type (e.g., image, video)
        "url": string,          // Media URL
        "alt": string           // Alt text for accessibility
    },
    "replies": number,          // Number of replies
    "retweets": number,         // Number of retweets
    "likes": number,            // Number of likes
    "views": number,            // Number of views
    "isLiked": boolean,         // Whether the user has liked the post
    "isRetweeted": boolean,     // Whether the user has retweeted the post
    "isReplied": boolean,       // Whether the user has replied to the post
    "isViewed": boolean,        // Whether the user has viewed the post
    "isBookmarked": boolean,    // Whether the user has bookmarked the post
    "isFollowed": boolean,      // Whether the user follows the poster
    "isTrending": boolean,      // Whether the post is trending
    "category": string          // Post category (e.g., tech, news)
}
```

These JSON files simulate an API, providing data for posts and user interactions.

### UI/UX Guidelines

- **Responsive Design:** Adapts to desktop, tablet, and mobile screens using CSS media queries.
- **Consistent Styling:** Custom CSS and Bootstrap Icons maintain a good look.
- **Interactive Elements:** Buttons for likes, retweets, replies, and bookmarks provide visual feedback.
- **Modal Views:** Detailed post information is displayed in modals for focused view.

### Screenshots of Output (for All Devices)
Include the following screenshots to demonstrate the responsive design:

- **Desktop View:** [Click here](https://drive.google.com/drive/folders/17jjh3PDAcRC0_7z7madE1gbVLvuaX36k?usp=sharing)
- **Tablet View:** [Click here](https://drive.google.com/drive/folders/1FQ7S44zbZG0D7sS-C36plBaS5LXCtJ9K?usp=sharing)
- **Mobile View:** [Click here](https://drive.google.com/drive/folders/1TUPSFQuEqSGKqdpBJZL5GeEXEaU-_UGC?usp=sharing)

### Deployment Details

The application is deployed on Netlify, with automatic redeployment of the latest `main` branch contents enabled by linking the GitHub repository. The live version is available at:

https://x-social-media-platform.netlify.app/

The deployment process includes:

- **Repository Access:** Netlify is granted permission to access the GitHub repo.
- **Automatic Builds:** Each push to the `main` branch triggers Netlify to run `npm install` and `npm run build`.
- **Deployment:** The built files are automatically deployed to Netlify.

This setup provides a seamless deployment process with minimal manual effort.

### Contributing (Fork the repository): 

Create a feature branch:
```bash
git checkout -b feature/Feature
```
Commit your changes:
```bash
git commit -m 'Added <Feature>'
```
Push to the branch:
```bash
git push origin feature/Feature
```
Open a Pull Request on GitHub.