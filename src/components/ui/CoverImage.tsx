'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CoverImage() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const updateScreen = () => setIsMobile(window.innerWidth <= 768);
        updateScreen();
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    return (
        <div className="relative mx-auto w-full max-w-3xl">
            <Image 
                src={isMobile ? '/images/cover.jpg' : '/images/cover-desktop.jpg'} 
                alt="Cover" 
                width={768} 
                height={512} 
                className="w-full rounded-xl object-cover" 
                priority
            />
        </div>
    );
}
