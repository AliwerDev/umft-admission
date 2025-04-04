import { useTranslations } from 'next-intl';
import React from 'react';
import LocationPicker from '../shared/LocationPicker';

const Contacts = () => {
    const t = useTranslations('ContactsSection');

    return (
        <div id="contacts" className="my-12 md:my-16">
            <div className="container">
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <h2 className="text-brand-500 mb-4 text-4xl font-bold md:text-5xl xl:text-6xl">{t('title')}</h2>
                        <p className="mb-12 text-lg leading-normal md:text-xl lg:max-w-md lg:text-2xl">{t('description')}</p>

                        <div className="mb-5">
                            <p className="text-sm leading-5 font-medium text-[#3E4462]">{t('phone')}</p>
                            <p className="text-xl font-semibold">+998 99 990 0880</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-sm leading-5 font-medium text-[#3E4462]">{t('email')}</p>
                            <p className="text-xl font-semibold">elektronmenu@gmail.com</p>
                        </div>
                        <div className="mb-5">
                            <p className="text-sm leading-5 font-medium text-[#3E4462]">{t('address')}</p>
                            <p className="text-xl font-semibold">Toshkent shahar, Alisher Navoi ko’chasi, 39-uy</p>
                        </div>
                    </div>
                    <div className="group relative hidden flex-1 lg:block">
                        <LocationPicker height={600} />
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <LocationPicker height={500} />
            </div>
        </div>
    );
};

export default Contacts;
