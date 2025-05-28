'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { ComponentProps, useTransition } from 'react';

export default function LanguageSwitcher(props: ComponentProps<'div'>) {
    const router = useRouter();
    const pathname = usePathname();
    const [, startTransition] = useTransition();
    const locale = useLocale();

    const handleChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className={'flex gap-2 md:gap-4 ' + props.className} {...props}>
            <button
                onClick={() => handleChange('uz')}
                className={
                    'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-2 py-2 md:px-4 ' +
                    (locale === 'uz' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800')
                }
            >
                <Image width={20} height={16} src={'/flags/uz.png'} className="h-4 w-5" alt="Uzbek" />{' '}
                <span className="hidden md:inline-block">O'zbekcha</span>
            </button>
            <button
                onClick={() => handleChange('ru')}
                className={
                    'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-2 py-2 md:px-4 ' +
                    (locale === 'ru' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800')
                }
            >
                <Image width={20} height={16} src={'/flags/ru.png'} className="h-4 w-5" alt="Русский" />{' '}
                <span className="hidden md:inline-block">Русский</span>
            </button>
        </div>
    );
}
