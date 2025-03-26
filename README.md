# Social Media Application

A modern social media application built with React that features real-time updates, interactive posts, and a responsive design.

## Features

- 📱 Responsive design that works on desktop and mobile devices
- 💬 Interactive post actions (like, retweet, reply, bookmark)
- 🔄 Dynamic content loading
- 👤 Verified user support
- 📊 Engagement metrics display
- 🖼️ Media support in posts
- 📱 Modal view for post details
- 💾 Persistent storage for user interactions

## Technologies Used

- React
- CSS3
- Bootstrap Icons
- Local Storage for data persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd [project-directory]
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure
```bash
src/
┣ components/
┃ ┣ Bookmarks/
┃ ┃ ┣ Bookmarks.css
┃ ┃ ┗ BookmarksColumn.jsx
┃ ┣ Communities/
┃ ┃ ┣ CommunitiesColumn.css
┃ ┃ ┣ CommunitiesColumn.jsx
┃ ┃ ┗ CommunitiesWelcomeModal.jsx
┃ ┣ Explore/
┃ ┃ ┣ ExploreColumn.css
┃ ┃ ┣ ExploreColumn.jsx
┃ ┃ ┣ PostDetailModal.css
┃ ┃ ┗ PostDetailModal.jsx
┃ ┣ Home/
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
┃ ┣ Lists/
┃ ┃ ┣ Lists.css
┃ ┃ ┗ ListsColumn.jsx
┃ ┣ Messages/
┃ ┃ ┣ MessageRightSection.jsx
┃ ┃ ┣ Messages.css
┃ ┃ ┗ MessagesColumn.jsx
┃ ┣ Mobile/
┃ ┃ ┣ MobileHeader.css
┃ ┃ ┗ MobileHeader.jsx
┃ ┣ Notification/
┃ ┃ ┣ NotificationColumn.css
┃ ┃ ┗ NotificationColumn.jsx
┃ ┣ Profile/
┃ ┃ ┣ EditProfileModal.css
┃ ┃ ┣ EditProfileModal.jsx
┃ ┃ ┣ ProfileColumn.css
┃ ┃ ┣ ProfileColumn.jsx
┃ ┃ ┣ ProfilePopup.css
┃ ┃ ┗ ProfilePopup.jsx
┃ ┗ Settings/
┃   ┣ Settings.css
┃   ┣ SettingsColumn.jsx
┃   ┗ SettingsRightSection.jsx
┣ context/
┃ ┣ PostsContext.jsx
┃ ┗ UserContext.jsx
┣ data/
┃ ┣ additional.json
┃ ┗ posts.json
┣ hooks/
┃ ┗ useScreenSize.js
┣ App.css
┣ App.jsx
┣ main.jsx
┗ variables.css
```

## Usage

- Browse through posts from various verified accounts
- Interact with posts through likes, retweets, and replies
- View detailed post information in the modal view
- Bookmark posts for later reference
- Track post engagement metrics

## Styling

The application uses custom CSS along with Bootstrap Icons for a clean, modern interface:


## Data Structure

Posts are structured with the following properties:

```javascript
{
    "id": number,
    "user": {
        "name": string,
        "username": string,
        "verified": boolean,
        "profilePicture": string
    },
    "content": string,
    "timestamp": string,
    "media": {
        "type": string,
        "url": string,
        "alt": string
    },
    "replies": number,
    "retweets": number,
    "likes": number,
    "views": number,
    "isLiked": boolean,
    "isRetweeted": boolean,
    "isReplied": boolean,
    "isViewed": boolean,
    "isBookmarked": boolean,
    "isFollowed": boolean,
    "isTrending": boolean,
    "category": string
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Bootstrap Icons for the icon library
- React community for the excellent documentation and resources