'use client';

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaYoutube, FaTelegram, FaFacebook } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SuccessPage() {
    const t = useTranslations();

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}

            <div className="mx-auto flex w-full max-w-5xl items-start justify-between p-3 md:pt-4">
                <Link href={'/'}>
                    <Image height={40} width={130} src={'/logo/hlogo.png'} alt="umft" />
                </Link>
                <LanguageSwitcher />
            </div>

            {/* Main content */}
            <div className="flex w-full flex-1 flex-col items-center justify-center bg-white px-4 text-center">
                <div className="mb-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
                        <span className="text-4xl text-white">✓</span>
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{t('successTitle')}</h1>
                <p className="mt-3 max-w-md text-gray-500">{t('successDescription')}</p> {/* Website button */}
                <a
                    href="https://umft.uz/"
                    className="mt-4 inline-block rounded-xl bg-gray-100 px-6 py-3 font-semibold text-gray-900 shadow hover:bg-gray-200"
                >
                    {t('goToWebsite')}
                </a>
            </div>

            {/* News section */}
            <div className="bg-[#f9fafb] px-4 py-10 text-center">
                <h2 className="text-xl font-bold text-green-600 md:text-2xl">{t('newsTitle')}</h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-700">{t('newsBody')}</p>

                <div className="mt-6 flex items-center justify-center-safe gap-3">
                    {/* Telegram CTA button */}
                    <a
                        href="https://t.me/raqamli_kelajak_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow hover:bg-green-700"
                    >
                        {t('newsButton')}
                    </a>
                </div>
            </div>

            {/* Socials */}
            <div className="mt-4 mb-10 text-center text-gray-600">
                <p className="mb-2 font-medium">{t('socialText')}</p>
                <div className="flex items-center justify-center gap-4 text-2xl text-gray-500">
                    <a href="https://www.instagram.com/umft.uz/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCodfoirEfSoXlCquATFavaQ" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://t.me/umftuz" target="_blank" rel="noopener noreferrer">
                        <FaTelegram />
                    </a>
                    <a href="https://www.facebook.com/umft.uz" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
}
