import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Contacts = () => {
    const t = useTranslations('ContactsSection');

    return (
        <div id="contacts">
            <div className="container py-[60px]">
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <h2 className="font-bold text-[56px] leading-[62px] tracking-[0px] text-brand-500 mb-8">{t('title')}</h2>
                        <p className="font-normal text-[20px] leading-[28px] tracking-[-0.4px] mb-[40px] max-w-[500px] text-[#1B1B1B">
                            {t('description')}
                        </p>

                        <div className="mb-5">
                            <p className="text-sm font-medium leading-5 tracking-[-0.02em] text-[#3E4462]">{t('phone')}</p>
                            <p className="font-semibold text-[20px] leading-[28px] tracking-[-0.4px] max-w-[500px] text-[#1B1B1B">+998 99 990 0880</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-sm font-medium leading-5 tracking-[-0.02em] text-[#3E4462]">{t('email')}</p>
                            <p className="font-semibold text-[20px] leading-[28px] tracking-[-0.4px] max-w-[500px] text-[#1B1B1B">
                                elektronmenu@gmail.com
                            </p>
                        </div>
                        <div className="mb-5">
                            <p className="text-sm font-medium leading-5 tracking-[-0.02em] text-[#3E4462]">{t('address')}</p>
                            <p className="font-semibold text-[20px] leading-[28px] tracking-[-0.4px] max-w-[500px] text-[#1B1B1B">
                                Toshkent shahar, Alisher Navoi ko’chasi, 39-uy
                            </p>
                        </div>
                    </div>
                    <div className="group relative flex-1 h-[600px]">
                        <Image src="/images/map.png" alt="Video Thumbnail" width={400} height={600} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
