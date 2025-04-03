import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const About = () => {
    const t = useTranslations('AboutSection');

    return (
        <div className="relative" id="about">
            <div className="container py-[40px]">
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <h2 className="font-bold text-[56px] leading-[62px] tracking-[0px] text-brand-500 mb-[40px]">{t('title')}</h2>

                        <p className="font-normal text-[20px] leading-[28px] tracking-[-0.4px]">{t('description')}</p>
                    </div>
                    <div className="relative flex-1 h-[380px]">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Uzbekistan 8K HDR 60p"
                            src="https://www.youtube.com/embed/-Vd8vH7W8fk"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 bottom-[-180px] z-1 overflow-hidden">
                <Image
                    style={{
                        objectFit: 'cover',
                        objectPosition: '-100px 0',
                    }}
                    src={'/images/plate.png'}
                    width={400}
                    height={400}
                    alt="image"
                />
            </div>
        </div>
    );
};

export default About;
