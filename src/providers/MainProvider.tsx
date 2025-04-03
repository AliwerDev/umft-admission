'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React, { Suspense } from 'react';
import TanStackProvider from './TanStackProvider';
import { ThemeProvider } from '@/context/ThemeContext';
import { SidebarProvider } from '@/context/SidebarContext';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

const MainProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <SessionProvider>
            <AntdRegistry>
                <ThemeProvider>
                    <TanStackProvider>
                        <Suspense>
                            <SidebarProvider>{children}</SidebarProvider>
                        </Suspense>
                        <Toaster position="top-right" toastOptions={{ duration: 3000 }} reverseOrder={false} gutter={8} />
                    </TanStackProvider>
                </ThemeProvider>
            </AntdRegistry>
        </SessionProvider>
    );
};

export default MainProvider;
