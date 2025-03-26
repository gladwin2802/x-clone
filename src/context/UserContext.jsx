import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const UserContext = createContext();

const STORAGE_KEY = 'user_details';

export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({
        name: "GLADWIN A J",
        username: "@gladwin_a_j",
        verified: false,
        profilePicture: "https://robohash.org/gladwin?set=set4",
        joinDate: "March 2025",
        bio: "I'm a software engineer and a full stack developer. I'm a software engineer and a full stack developer. I'm a software engineer and a full stack developer. I'm a software engineer and a full stack developer.",
        following: 2,
        followers: 0
    });

    useEffect(() => {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
            try {
                setUserDetails(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user details:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userDetails));
    }, [userDetails]);

    const updateUserDetails = useCallback((newDetails) => {
        setUserDetails(prevDetails => ({
            ...prevDetails,
            ...newDetails
        }));
    }, []);

    const value = useMemo(() => ({
        userDetails,
        updateUserDetails
    }), [userDetails, updateUserDetails]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}; 