import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const features = [
    {
        title: 'Property Management',
        icon: '/images/icons/shopping_basket.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
    {
        title: 'Team Accounts',
        icon: '/images/icons/shopping_basket.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
    {
        title: 'Email Marketing',
        icon: '/images/icons/shopping_basket.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
    {
        title: 'User Administration',
        icon: '/images/icons/shopping_basket.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
    {
        title: 'Marketing Automation',
        icon: '/images/icons/Home.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
    {
        title: 'API Reference',
        icon: '/images/icons/shopping_basket.svg',
        desc: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs',
    },
];

const Features = () => {
    const t = useTranslations('FeaturesSection');

    return (
        <div className="relative my-[60px] overflow-hidden bg-[#16833E]" id="features">
            <div className="container min-h-[500px]">
                <div className="relative z-10 py-[120px]">
                    <h2 className="mb-14 text-center text-4xl font-bold text-white md:text-5xl xl:text-6xl">{t('title')}</h2>{' '}
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <div key={idx} className="rounded-2xl bg-white p-6 text-center">
                                <div className="relative mb-3 flex w-full items-center gap-4 sm:mx-auto sm:flex-col">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                                        <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} />
                                    </div>
                                    <h3 className="text-[22px] leading-[30px] font-semibold sm:text-center">{item.title}</h3>
                                </div>
                                <p className="text-left text-[18px] leading-[26px] font-medium text-[#6B6B6B] sm:text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="absolute top-0 left-0 h-full w-full"
                style={{
                    backgroundImage: 'url("/images/shape/features2.png")',
                    backgroundPosition: 'center top',
                    backgroundSize: '800px',
                }}
            ></div>

            <div className="absolute -bottom-20 left-0 md:-bottom-5">
                <svg width="100%" className="scale-200" height="510" viewBox="0 0 1440 510" fill="none">
                    <path d="M1576 0C1151.6 359.6 296.5 282.833 -78 199.5L-3 510H1443L1445 508.5L1527 438.5L1576 0Z" fill="#9DD74F" />
                </svg>
            </div>
        </div>
    );
};

export default Features;
