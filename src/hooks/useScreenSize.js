import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const tabletBreakpoint = 1350;
            const mobileBreakpoint = 880;

            setIsTablet(window.innerWidth <= tabletBreakpoint);
            setIsMobile(window.innerWidth <= mobileBreakpoint);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { isTablet, isMobile };
};

export default useScreenSize; 