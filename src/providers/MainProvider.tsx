import React from 'react';
import { Toaster } from 'react-hot-toast';

const MainProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} reverseOrder={false} gutter={8} />
        </>
    );
};

export default MainProvider;
