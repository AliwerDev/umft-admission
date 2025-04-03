'use client';

import React from 'react';
import { Table as BaseTable, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { ColumnType, ColumnGroupType } from 'antd/es/table';

type AntColumn<T> = ColumnType<T> | ColumnGroupType<T>;

interface CustomTableProps<T> {
    columns: AntColumn<T>[];
    dataSource: T[];
    rowKey?: string | ((record: T) => React.Key);
    className?: string;
    bordered?: boolean;
    scroll?: { x?: number | string; y?: number | string };
}

const CustomTable = <T extends object>({ columns, dataSource, rowKey = 'id', className = '', bordered = true, scroll }: CustomTableProps<T>) => {
    const getRowKey = (record: T, index: number): React.Key => {
        if (typeof rowKey === 'function') {
            return rowKey(record);
        }
        return (record as any)[rowKey] ?? index;
    };

    const renderCell = (column: AntColumn<T>, record: T, index: number) => {
        if ('children' in column) {
            console.warn('Column groups are not supported in this implementation');
            return null;
        }

        const { dataIndex, render, align, className: colClassName, width } = column as ColumnType<T>;

        // Get the cell value
        let text: any;
        if (dataIndex) {
            if (Array.isArray(dataIndex)) {
                text = dataIndex.reduce((obj, key) => obj?.[key], record);
            } else {
                text = (record as any)[dataIndex];
            }
        }

        // Render the cell
        const content = render ? render(text, record, index) : text;

        return (
            <TableCell
                key={column.key?.toString() || column.dataIndex?.toString() || index}
                className={`px-5 py-4 text-${align || 'start'} text-theme-sm dark:text-gray-400 ${colClassName || ''}`}
                style={{ width }}
            >
                {content}
            </TableCell>
        );
    };

    return (
        <div
            className={`overflow-hidden max-w-full rounded-xl ${
                bordered ? 'border border-gray-200 dark:border-white/[0.05]' : ''
            } bg-white dark:bg-white/[0.03] ${className}`}
            style={{
                maxWidth: scroll?.x ? 'none' : '100%',
                overflowX: scroll?.x ? 'auto' : 'hidden',
                maxHeight: scroll?.y,
                overflowY: scroll?.y ? 'auto' : 'visible',
            }}
        >
            <div style={{ minWidth: scroll?.x }}>
                <BaseTable>
                    {/* Table Header */}
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            {columns.map((column: ColumnType<T>, index) => (
                                <TableCell
                                    key={column.key?.toString() || index}
                                    isHeader
                                    className={`px-5 py-3 font-medium text-gray-500 text-${
                                        column.align || 'start'
                                    } text-theme-xs dark:text-gray-400 ${column.className || ''}`}
                                    style={{ width: column.width }}
                                >
                                    {column.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {dataSource.map((record, rowIndex) => (
                            <TableRow key={getRowKey(record, rowIndex)}>
                                {columns.map((column, colIndex) => renderCell(column, record, colIndex))}
                            </TableRow>
                        ))}
                    </TableBody>
                </BaseTable>
            </div>
        </div>
    );
};

export default CustomTable;
