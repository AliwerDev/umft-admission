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
                            {/* <a className="text-lg font-normal text-white decoration-0" href="#about">
                                {t('about')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#features">
                                {t('features')}
                            </a>
                            <a className="text-lg font-normal text-white decoration-0" href="#team">
                                {t('team')}
                            </a> */}
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
                    <h2 className="max-w-[1200px] text-center text-3xl leading-snug font-bold tracking-[0px] sm:text-5xl md:text-4xl xl:text-5xl">
                        {heroT('title')}
                    </h2>

                    <a href="#shipment">
                        <button className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#9DD74F] px-12 py-4 text-2xl">
                            {t('tracking_shipment')}{' '}
                            <svg
                                className="h-[42px] w-[42px] text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            {/* <div className="absolute bottom-0 z-20 flex w-full justify-center">
                <Image src={'/images/boxes.png'} alt="hero" className="max-w-96 lg:max-w-[500px]" width={500} height={230} />
            </div> */}
            <div className="absolute top-0 left-0 h-full w-full bg-[#0404048C]"></div>
            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
    );
};

export default HeroSection;
