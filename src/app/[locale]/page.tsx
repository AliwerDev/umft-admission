'use client';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ContactForm from '@/components/ui/ContactForm';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import ImageCarousel from '@/components/ui/ImageCarousel';

const Page = () => {
    const t = useTranslations();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-4 py-8 font-sans md:flex-row">
            <div className="flex w-full max-w-md items-start justify-between md:hidden">
                <Image height={40} width={130} src={'/logo/hlogo.png'} alt="umft" />
                <LanguageSwitcher />
            </div>
            {/* Image Section */}
            <div className="w-full max-w-md md:order-2 md:w-1/2">
                <ImageCarousel />
            </div>

            {/* Form Section */}
            <div className="w-full max-w-md md:order-1">
                <Image height={50} width={180} src={'/logo/hlogo.png'} alt="umft" className="mb-8 hidden md:block" />

                <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
                    <span className="block text-3xl font-extrabold text-[#ffcf00] md:text-4xl">{t('headingHighlight')}</span>
                    <span className="block text-xl text-gray-900 md:text-2xl lg:text-3xl">{t('headingText')}</span>
                </h1>

                <p className="mb-4 text-base text-gray-600 md:text-lg lg:text-xl">{t('description')}</p>
                <ContactForm onSubmit={(...rest) => console.log(rest)} />

                <div className="hidden pt-2 md:block">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Page;
