'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../common/LanguageSwitcher';
import MobileDrawer from '../common/MobileDrawer';

const HeroSection = () => {
    const t = useTranslations();
    const heroT = useTranslations('HeroSection');
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <div
            style={{
                backgroundImage: 'url("/images/hero-bg.png")',
            }}
            className="relative bg-cover bg-center bg-no-repeat"
        >
            <div className="relative z-10 container flex min-h-screen flex-col items-center justify-center overflow-hidden text-white">
                <div className="absolute top-0 left-0 container flex w-full items-center justify-between py-4">
                    <Image src="/images/logo/logo-light.svg" alt="logo" width={130} height={60} />

                    <div className="hidden items-center gap-6 xl:flex">
                        <div className="flex gap-6">
                            <a className="text-lg font-normal text-white decoration-0" href="#guide">
                                {t('guide')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#about">
                                {t('about')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#features">
                                {t('features')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#team">
                                {t('team')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#contacts">
                                {t('contacts')}
                            </a>
                        </div>

                        <LanguageSwitcher />

                        <a href="http://cabinet.elektron-menyu.uz/" target="_blank">
                            <button className="flex h-[45px] w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[#9DD74F] text-lg">
                                {t('login')}
                            </button>
                        </a>
                    </div>

                    <Image
                        className="block cursor-pointer xl:hidden"
                        src="/images/icons/menu-burger.svg"
                        width={40}
                        height={40}
                        alt="elektron-menyu"
                        onClick={() => setDrawerOpen(true)}
                    />
                </div>

                <div className="flex flex-col items-center gap-8">
                    <h2 className="max-w-[1200px] text-center text-4xl leading-snug font-bold tracking-[0px] sm:text-5xl md:text-6xl xl:text-7xl">
                        {heroT('title')}
                    </h2>
                    <p className="max-w-xl text-center text-lg leading-normal md:text-xl lg:text-2xl">{heroT('description')}</p>

                    <a href="http://cabinet.elektron-menyu.uz/" target="_blank" className="xl:hidden">
                        <button className="flex h-[45px] w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[#9DD74F] text-lg">
                            {t('login')}
                        </button>
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 z-20 flex w-full justify-center">
                <Image src={'/images/hero-meal.png'} alt="hero" className="max-w-96 lg:max-w-[500px]" width={500} height={230} />
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-[#0404048C]"></div>
            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
    );
};

export default HeroSection;
