'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../common/LanguageSwitcher';

const HeroSection = () => {
    const t = useTranslations();
    const heroT = useTranslations('HeroSection');

    return (
        <div
            style={{
                backgroundImage: 'url("/images/hero-bg.png")',
            }}
            className="bg-cover bg-center bg-no-repeat relative"
        >
            <div className="container min-h-screen overflow-hidden relative z-10 text-white flex flex-col justify-center items-center">
                <div className="flex justify-between items-center py-3 absolute top-0 left-0 w-full">
                    <Image src="/images/logo/logo-light.svg" alt="logo" width={130} height={60} />

                    <div className="flex items-center gap-6">
                        <div className="flex gap-6">
                            <a className="text-white decoration-0 font-normal text-lg" href="#guide">
                                {t('guide')}
                            </a>
                            <a className="text-white decoration-0 font-normal text-lg" href="#about">
                                {t('about')}
                            </a>
                            <a className="text-white decoration-0 font-normal text-lg" href="#features">
                                {t('features')}
                            </a>
                            <a className="text-white decoration-0 font-normal text-lg" href="#team">
                                {t('team')}
                            </a>
                            <a className="text-white decoration-0 font-normal text-lg" href="#contacts">
                                {t('contacts')}
                            </a>
                        </div>

                        <LanguageSwitcher />

                        <a href="http://cabinet.elektron-menyu.uz/" target="_blank">
                            <button className="flex justify-center items-center rounded-lg h-[45px] w-[160px] bg-[#9DD74F] text-lg cursor-pointer">
                                {t('login')}
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-8 items-center">
                    <h2 className="font-bold text-[70px] leading-[80px] tracking-[0px] text-center max-w-[1200px]">{heroT('title')}</h2>
                    <p className="text-[20px] leading-[28px] tracking-[-0.4px] text-center max-w-[550px]">{heroT('description')}</p>
                </div>
            </div>
            <div className="absolute bottom-0 flex justify-center w-full z-20">
                <Image src={'/images/hero-meal.png'} alt="hero" width={500} height={230} />
            </div>
            <div className="bg-[#0404048C] absolute top-0 left-0 w-full h-full"></div>
        </div>
    );
};

export default HeroSection;
