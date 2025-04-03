import { useTranslations } from 'next-intl';
import React from 'react';

const Guide = () => {
    const t = useTranslations('GuideSection');
    return (
        <div id="guide" className="my-[120px]">
            <div className="container">
                <h2 className="font-bold text-[56px] leading-[62px] tracking-[0px] text-brand-500 mb-[40px]">{t('title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="relative flex-1 h-60">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            src="https://www.youtube.com/embed/vQVwkyn3-F8?controls=0&showinfo=0&rel=0&modestbranding=1"
                            title="Uzbekistan 8K HDR 60p"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        <p className="mt-4 font-semibold text-[22px] leading-[30px] tracking-[-0.55px]">
                            6 Creative Ways to Use Repeat Grids in Adobe XD
                        </p>
                    </div>
                    <div className="relative flex-1 h-60">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Uzbekistan 8K HDR 60p"
                            src="https://www.youtube.com/embed/S_dfq9rFWAE"
                        ></iframe>

                        <p className="mt-4 font-semibold text-[22px] leading-[30px] tracking-[-0.55px]">
                            6 Creative Ways to Use Repeat Grids in Adobe XD
                        </p>
                    </div>
                    <div className="relative flex-1 h-60">
                        <iframe
                            className="w-full h-full rounded-lg shadow-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Uzbekistan 8K HDR 60p"
                            src="https://www.youtube.com/embed/N1-Jmq7BLFE"
                        ></iframe>

                        <p className="mt-4 font-semibold text-[22px] leading-[30px] tracking-[-0.55px]">
                            6 Creative Ways to Use Repeat Grids in Adobe XD
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;
