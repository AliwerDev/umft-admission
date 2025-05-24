'use client';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ContactForm from '@/components/ui/ContactForm';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import ImageCarousel from '@/components/ui/ImageCarousel';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Page = () => {
    const [isLoading, setIsLoading] = useState(false);

    const t = useTranslations();
    const router = useRouter();

    const handleSubmit = async (formData: any) => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/contact', formData);

            if (response.status === 200) {
                router.push('/register');
            } else {
                toast.error(t('InternalError'));
            }
        } catch (error) {
            toast.error(t('InternalError'), { position: 'top-center' });
            console.error('Server bilan bogʻlanishda xatolik:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-4 py-8 md:flex-row">
            <div className="flex w-full max-w-md items-start justify-between md:hidden">
                <Link href={'/'}>
                    <Image height={40} width={130} src={'/logo/hlogo.png'} alt="umft" />
                </Link>
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
                <ContactForm isLoading={isLoading} onSubmit={handleSubmit} />

                <div className="hidden pt-2 md:block">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Page;
