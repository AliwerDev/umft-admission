'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useUrlParams<T extends Record<string, any>>(defaultValues: Partial<T> = {}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // URL ni yangi params bilan yangilash uchun helper
    const updateUrlParams = useCallback(
        (newParams: Partial<T>) => {
            const updatedParams = new URLSearchParams(searchParams.toString());
            let hasChanges = false;

            Object.entries(newParams).forEach(([key, value]) => {
                if (value === undefined || value === null || value === '') {
                    if (updatedParams.has(key)) {
                        updatedParams.delete(key);
                        hasChanges = true;
                    }
                } else {
                    if (updatedParams.get(key) !== String(value)) {
                        updatedParams.set(key, String(value));
                        hasChanges = true;
                    }
                }
            });

            if (hasChanges) {
                const newUrl = `${pathname}?${updatedParams.toString()}`;
                router.replace(newUrl, { scroll: false }); // Sahifani yuqoriga ko‘tarib yubormaslik uchun
            }
        },
        [searchParams, pathname, router],
    );

    // URL dagi paramsni olish
    const params = useMemo(() => {
        const paramsObj = new URLSearchParams(searchParams.toString());

        // Default qiymatlarni qo‘shish
        Object.entries(defaultValues).forEach(([key, value]) => {
            if (!paramsObj.has(key) && value !== undefined && value !== null) {
                paramsObj.set(key, String(value));
            }
        });

        return paramsObj;
    }, [searchParams, defaultValues]);

    return { params, setParams: updateUrlParams };
}
