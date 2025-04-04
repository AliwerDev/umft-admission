import { useTranslations } from 'next-intl';
import React from 'react';

const Guide = () => {
    const t = useTranslations('GuideSection');
    return (
        <div id="guide" className="my-12 md:my-16">
            <div className="container">
                <h2 className="text-brand-500 mb-7 text-4xl leading-[62px] font-bold md:text-5xl lg:mb-10 xl:text-6xl">{t('title')}</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative flex-1">
                        <iframe
                            className="h-60 w-full rounded-lg shadow-md"
                            src="https://www.youtube.com/embed/vQVwkyn3-F8?controls=0&showinfo=0&rel=0&modestbranding=1"
                            title="Uzbekistan 8K HDR 60p"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        <p className="mt-4 text-xl font-semibold tracking-[-0.55px] md:text-2xl">6 Creative Ways to Use Repeat Grids in Adobe XD</p>
                    </div>
                    <div className="relative flex-1">
                        <iframe
                            className="h-60 w-full rounded-lg shadow-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Uzbekistan 8K HDR 60p"
                            src="https://www.youtube.com/embed/S_dfq9rFWAE"
                        ></iframe>

                        <p className="mt-4 text-xl font-semibold tracking-[-0.55px] md:text-2xl">6 Creative Ways to Use Repeat Grids in Adobe XD</p>
                    </div>
                    <div className="relative flex-1">
                        <iframe
                            className="h-60 w-full rounded-lg shadow-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Uzbekistan 8K HDR 60p"
                            src="https://www.youtube.com/embed/N1-Jmq7BLFE"
                        ></iframe>

                        <p className="mt-4 text-xl font-semibold tracking-[-0.55px] md:text-2xl">6 Creative Ways to Use Repeat Grids in Adobe XD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;
