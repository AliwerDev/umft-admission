import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    const t = useTranslations();

    return (
        <div className="bg-brand-500 pt-6">
            <div className="container">
                <div className="flex justify-between items-center py-6 w-full border-b border-[#ffffff20]">
                    <Image src="/images/logo/logo-light.svg" alt="logo" width={130} height={60} />

                    <div className="flex gap-6">
                        <a className="text-white decoration-0 font-normal" href="#guide">
                            {t('guide')}
                        </a>
                        <a className="text-white decoration-0 font-normal" href="#about">
                            {t('about')}
                        </a>
                        <a className="text-white decoration-0 font-normal" href="#features">
                            {t('features')}
                        </a>
                        <a className="text-white decoration-0 font-normal" href="#team">
                            {t('team')}
                        </a>
                    </div>

                    <div className="flex gap-3 icons">
                        <Image src="/images/icons/youtube.svg" alt="logo" width={32} height={32} />
                        <Image src="/images/icons/facebook.svg" alt="logo" width={32} height={32} />
                        <Image src="/images/icons/telegram.svg" alt="logo" width={32} height={32} />
                    </div>
                </div>
                <p className="text-white decoration-0 font-normal text-center py-6">{t('copyright')}</p>
            </div>
        </div>
    );
};

export default Footer;
