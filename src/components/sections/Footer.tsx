import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    const t = useTranslations();

    return (
        <div className="bg-brand-500 pt-6">
            <div className="container">
                <div className="flex w-full flex-col items-center justify-center gap-12 border-b border-[#ffffff20] py-6 md:justify-between lg:flex-row lg:gap-3">
                    <Image src="/images/logo/logo-light.svg" alt="logo" width={130} height={60} />

                    <div className="flex flex-col items-center gap-6 sm:flex-row">
                        <a className="text-center font-normal text-white decoration-0" href="#guide">
                            {t('guide')}
                        </a>
                        <a className="font-normal text-white decoration-0" href="#about">
                            {t('about')}
                        </a>
                        <a className="font-normal text-white decoration-0" href="#features">
                            {t('features')}
                        </a>
                        <a className="font-normal text-white decoration-0" href="#team">
                            {t('team')}
                        </a>
                    </div>

                    <div className="icons flex gap-3">
                        <Image src="/images/icons/youtube.svg" alt="logo" width={32} height={32} />
                        <Image src="/images/icons/facebook.svg" alt="logo" width={32} height={32} />
                        <Image src="/images/icons/telegram.svg" alt="logo" width={32} height={32} />
                    </div>
                </div>
                <p className="py-6 text-center font-normal text-white decoration-0">{t('copyright')}</p>
            </div>
        </div>
    );
};

export default Footer;
