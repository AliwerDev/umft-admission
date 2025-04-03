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
        <div className="relative bg-[#16833E] overflow-hidden my-[60px]" id="features">
            <div className="container  min-h-[500px]">
                <div className="relative z-10 py-[120px]">
                    <h2 className="font-bold text-[56px] leading-[62px] tracking-[0px] text-center text-white mb-14">{t('title')}</h2>{' '}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {features.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 mx-auto mb-4 relative">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                                        <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} className="invert text-white" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-[22px] leading-[30px] tracking-[-0.55px] text-center mb-3">{item.title}</h3>
                                <p className="font-medium text-[18px] leading-[26px] tracking-[-0.3px] text-center text-[#6B6B6B]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="absolute left-0 top-0 w-full h-full"
                style={{
                    backgroundImage: 'url("/images/shape/features2.png")',
                    backgroundPosition: 'center top',
                    backgroundSize: '800px',
                }}
            ></div>
            <div className="absolute left-0 bottom-[50px] w-full h-[50%]">
                <svg width="100%" className="scale-200" height="510" viewBox="0 0 1440 510" fill="none">
                    <path d="M1576 0C1151.6 359.6 296.5 282.833 -78 199.5L-3 510H1443L1445 508.5L1527 438.5L1576 0Z" fill="#9DD74F" />
                </svg>
            </div>
        </div>
    );
};

export default Features;
