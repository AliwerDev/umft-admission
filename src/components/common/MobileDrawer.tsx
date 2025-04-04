'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
    const t = useTranslations();

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '0px';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-black/10 px-6 pt-8 text-white backdrop-blur-xl"
                >
                    <div className="fixed top-0 left-0 container flex w-full items-start justify-between py-4">
                        <Image src="/images/logo/logo-light.svg" alt="logo" width={130} height={60} />
                        <button onClick={onClose} className="mr-6 cursor-pointer text-4xl font-extrabold text-white">
                            ×
                        </button>
                    </div>

                    <nav className="flex min-w-sm flex-col items-center gap-6 text-lg font-medium">
                        <a href="#guide" onClick={onClose}>
                            {t('guide')}
                        </a>
                        <a href="#about" onClick={onClose}>
                            {t('about')}
                        </a>
                        <a href="#features" onClick={onClose}>
                            {t('features')}
                        </a>
                        <a href="#team" onClick={onClose}>
                            {t('team')}
                        </a>
                        <a href="#contacts" onClick={onClose}>
                            {t('contacts')}
                        </a>
                        <LanguageSwitcher />
                        <a
                            href="http://cabinet.elektron-menyu.uz/"
                            target="_blank"
                            className="mt-4 inline-block min-w-44 rounded-lg bg-[#9DD74F] py-2 text-center text-white"
                        >
                            {t('login')}
                        </a>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileDrawer;
