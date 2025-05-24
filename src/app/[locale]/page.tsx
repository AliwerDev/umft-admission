'use client';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ContactForm from '@/components/ui/ContactForm';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-4 py-8 font-sans md:flex-row">
            {/* Form Section */}
            <div className="w-full max-w-md">
                <Image height={50} width={180} src={'/logo/hlogo.png'} alt="umft" className="mb-8" />

                <h1 className="mb-3 text-2xl font-bold text-gray-800 md:text-3xl">
                    <span className="text-4xl font-extrabold text-[#ffcf00]">{t('headingHighlight')}</span>
                    <span className="text-gray-900">{t('headingText')}</span>
                </h1>

                <p className="mb-3 text-gray-600">{t('description')}</p>
                <ContactForm onSubmit={(...rest) => console.log(rest)} />

                <LanguageSwitcher />
            </div>

            {/* Image Section */}
            <div className="w-full max-w-md md:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img src="https://i.ibb.co/7r49cWx/ielts85.jpg" alt="IELTS 8.5" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Page;
