import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { PostsProvider } from './context/PostsContext';
import LeftSidebar from './components/Home/LeftSidebar';
import RightSidebar from './components/Home/RightSidebar';
import MainColumn from './components/Home/MainColumn';
import ExploreColumn from './components/Explore/ExploreColumn';
import NotificationColumn from './components/Notification/NotificationColumn';
import MessagesColumn from './components/Messages/MessagesColumn';
import MessageRightSection from './components/Messages/MessageRightSection';
import CommunitiesWelcomeModal from './components/Communities/CommunitiesWelcomeModal';
import CommunitiesColumn from './components/Communities/CommunitiesColumn';
import ProfileColumn from './components/Profile/ProfileColumn';
import ListsColumn from './components/Lists/ListsColumn';
import BookmarksColumn from './components/Bookmarks/BookmarksColumn';
import SettingsColumn from './components/Settings/SettingsColumn';
import SettingsRightSection from './components/Settings/SettingsRightSection';
import PostModal from './components/Home/PostModal';
import ProfilePopup from './components/Profile/ProfilePopup';
import MobileHeader from './components/Mobile/MobileHeader';
import useScreenSize from './hooks/useScreenSize';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const App = () => {
    const [tab, setTab] = useState('For you');
    const [currentPage, setCurrentPage] = useState('home');
    const [showCommunitiesModal, setShowCommunitiesModal] = useState(false);
    const [hasSeenCommunitiesIntro, setHasSeenCommunitiesIntro] = useState(false);
    const [selectedSetting, setSelectedSetting] = useState(null);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [profilePopupPosition, setProfilePopupPosition] = useState({ bottom: 0, left: 0 });
    const [showSettingsContent, setShowSettingsContent] = useState(false);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const { isTablet, isMobile } = useScreenSize();

    const handleNavigation = (page) => {
        if (page === 'communities' && !hasSeenCommunitiesIntro) {
            setShowCommunitiesModal(true);
        }
        setCurrentPage(page);
        setShowSettingsContent(false);
        if (isMobile) {
            setShowMobileSidebar(false);
        }
    };

    const handleMobileProfileClick = () => {
        setShowMobileSidebar(true);
    };

    const handleCheckItOut = () => {
        setShowCommunitiesModal(false);
        setHasSeenCommunitiesIntro(true);
    };

    const handleSettingSelect = (setting) => {
        setSelectedSetting(setting);
        if (isTablet || isMobile) {
            setShowSettingsContent(true);
        }
    };

    const handleBackToSettings = () => {
        setShowSettingsContent(false);
    };

    const renderMainContent = () => {
        switch (currentPage) {
            case 'explore':
                return <ExploreColumn />;
            case 'notifications':
                return <NotificationColumn />;
            case 'messages':
                return <MessagesColumn />;
            case 'communities':
                return <CommunitiesColumn />;
            case 'profile':
                return <ProfileColumn />;
            case 'lists':
                return <ListsColumn />;
            case 'bookmarks':
                return <BookmarksColumn />;
            case 'settings':
                if (isTablet || isMobile) {
                    return showSettingsContent ? (
                        <SettingsRightSection
                            selectedSetting={selectedSetting}
                            onBack={handleBackToSettings}
                        />
                    ) : (
                        <SettingsColumn onSettingSelect={handleSettingSelect} />
                    );
                }
                return <SettingsColumn onSettingSelect={handleSettingSelect} />;
            default:
                return <MainColumn tab={tab} setTab={setTab} />;
        }
    };

    const shouldShowRightSidebar = () => {
        if (currentPage === 'settings' && (isTablet || isMobile)) {
            return false;
        }
        if (isTablet || isMobile) {
            return false;
        }
        return true;
    };

    const renderRightSidebar = () => {
        if (!shouldShowRightSidebar()) {
            return null;
        }

        switch (currentPage) {
            case 'messages':
                return <MessageRightSection />;
            case 'settings':
                return <SettingsRightSection selectedSetting={selectedSetting} />;
            case 'explore':
                return <RightSidebar isExplore={true} />;
            case 'communities':
            case 'notifications':
            case 'profile':
            case 'lists':
            case 'bookmarks':
                return <RightSidebar isExplore={false} />;
            default:
                return <RightSidebar isExplore={false} />;
        }
    };

    const shouldShowLeftSidebar = () => {
        if (isMobile) {
            return showMobileSidebar;
        }
        return true;
    };

    const shouldShowMobileHeader = () => {
        if (isMobile) {
            return true;
        }
        return false;
    };

    const renderMobileContent = () => {
        if (isMobile && showMobileSidebar) {
            return (
                <LeftSidebar
                    onNavigate={handleNavigation}
                    currentPage={currentPage}
                    onPostClick={() => setIsPostModalOpen(true)}
                    onProfileClick={(position) => {
                        setProfilePopupPosition(position);
                        setIsProfilePopupOpen(true);
                    }}
                />
            );
        }
        return (
            <>
                {renderMainContent()}
                {renderRightSidebar()}
            </>
        );
    };

    return (
        <UserProvider>
            <PostsProvider>
                <div className="app">
                    {shouldShowMobileHeader() && (
                        <MobileHeader
                            onProfileClick={handleMobileProfileClick}
                            onNavigate={handleNavigation}
                        />
                    )}
                    <div className="app-content">
                        {isMobile ? (
                            renderMobileContent()
                        ) : (
                            <>
                                {shouldShowLeftSidebar() && (
                                    <LeftSidebar
                                        onNavigate={handleNavigation}
                                        currentPage={currentPage}
                                        onPostClick={() => setIsPostModalOpen(true)}
                                        onProfileClick={(position) => {
                                            setProfilePopupPosition(position);
                                            setIsProfilePopupOpen(true);
                                        }}
                                    />
                                )}
                                {renderMainContent()}
                                {renderRightSidebar()}
                            </>
                        )}
                    </div>
                    {showCommunitiesModal && (
                        <CommunitiesWelcomeModal
                            onClose={() => setShowCommunitiesModal(false)}
                            onCheckItOut={handleCheckItOut}
                        />
                    )}
                    {isPostModalOpen && (
                        <PostModal
                            onClose={() => setIsPostModalOpen(false)}
                        />
                    )}
                    {isProfilePopupOpen && (
                        <ProfilePopup
                            onClose={() => setIsProfilePopupOpen(false)}
                            position={profilePopupPosition}
                        />
                    )}
                    {isMobile && showMobileSidebar && (
                        <div
                            className="mobile-overlay"
                            onClick={() => setShowMobileSidebar(false)}
                        />
                    )}
                </div>
            </PostsProvider>
        </UserProvider>
    );
};

export default App;