import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

const names: any = {
    uz: "O'zbek",
    ru: 'Русский',
    tr: 'Türkçe',
};

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [, startTransition] = useTransition();
    const locale = useLocale();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <select
            onChange={handleChange}
            defaultValue={locale}
            className="cursor-pointer rounded-lg border px-3 py-1 text-sm shadow-sm focus:outline-none"
        >
            {locales.map((l) => (
                <option className="cursor-pointer bg-black" key={l} value={l}>
                    {names[l]}
                </option>
            ))}
        </select>
    );
}
