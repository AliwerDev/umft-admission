import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const About = () => {
    const t = useTranslations('AboutSection');

    return (
        <div className="relative my-12 md:my-16" id="about">
            <div className="container pb-20">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                    <div className="w-full md:flex-1">
                        <h2 className="text-brand-500 mb-3 text-4xl font-bold md:text-5xl lg:mb-10 xl:text-6xl">{t('title')}</h2>
                        <p className="max-w-md text-lg leading-normal md:text-xl lg:text-2xl">{t('description')}</p>
                    </div>
                    <iframe
                        className="h-72 w-full rounded-lg shadow-md md:h-96 md:flex-1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Uzbekistan 8K HDR 60p"
                        src="https://www.youtube.com/embed/-Vd8vH7W8fk"
                    ></iframe>
                </div>
            </div>

            <div className="absolute -bottom-48 left-0 z-1 overflow-hidden">
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
