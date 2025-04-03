'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React, { Suspense } from 'react';
import TanStackProvider from './TanStackProvider';
import { Toaster } from 'react-hot-toast';

const MainProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <AntdRegistry>
            <TanStackProvider>
                <Suspense>{children}</Suspense>
                <Toaster position="top-right" toastOptions={{ duration: 3000 }} reverseOrder={false} gutter={8} />
            </TanStackProvider>
        </AntdRegistry>
    );
};

export default MainProvider;
