import { get, isFunction } from 'lodash';
import React, { ReactNode } from 'react';

export interface Column {
    label: string;
    key: string;
    render?: (value: string | number) => string | number | ReactNode;
}

interface DataCardProps<T> {
    data: T;
    columns: Column[];
    title?: string;
}

export default function DataCard<T>({ data, columns, title }: DataCardProps<T>) {
    return (
        <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="w-full">
                    <h4 className="text-lg font-semibold text-gray-800 lg:mb-6 dark:text-white/90">{title ? title : "Ma'lumotlar"}</h4>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                        {columns.map((column) => (
                            <div key={column.key}>
                                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">{column.label}</p>
                                <div className="text-sm font-medium text-gray-800 dark:text-white/90">
                                    {isFunction(column.render) ? column.render(get(data, column.key)) : get(data, column.key) || '-'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
