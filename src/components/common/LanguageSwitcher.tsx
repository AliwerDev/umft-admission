import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [, startTransition] = useTransition();
    const locale = useLocale();

    const handleChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    console.log(locale);

    return (
        <div className="flex gap-4 pt-2">
            <button
                onClick={() => handleChange('uz')}
                className={
                    'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg ' +
                    (locale === 'uz' ? 'bg-black px-4 py-2 text-white' : 'bg-gray-200 px-4 py-2 text-gray-800')
                }
            >
                <img src="https://flagcdn.com/w40/uz.png" className="h-4 w-5" alt="Uzbek" /> O'zbekcha
            </button>
            <button
                onClick={() => handleChange('ru')}
                className={
                    'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg ' +
                    (locale === 'ru' ? 'bg-black px-4 py-2 text-white' : 'bg-gray-200 px-4 py-2 text-gray-800')
                }
            >
                <img src="https://flagcdn.com/w40/ru.png" className="h-4 w-5" alt="Russian" /> Русский
            </button>
        </div>
    );
}
