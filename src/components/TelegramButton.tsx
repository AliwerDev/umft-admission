'use client';

import React from 'react';

// TypeScript declaration for Telegram pixel
declare global {
    interface Window {
        tgp: (action: string, eventId: string) => void;
    }
}

interface TelegramButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function TelegramButton({ href, children, className }: TelegramButtonProps) {
    const handleClick = () => {
        // Track the Telegram event
        if (typeof window !== 'undefined' && window.tgp) {
            window.tgp('event', 'trkKcyHn-4nNSkSOa');
        }

        // Redirect to Telegram
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
}