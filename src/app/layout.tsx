import { Outfit } from 'next/font/google';
import './globals.css';
import MainProvider from '@/providers/MainProvider';
import { Metadata } from 'next';

const outfit = Outfit({
    variable: '--font-outfit-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Elektron menyu',
    description: "Elektron menyu - davlat bog'chalari uchun onlayn taomnoma nazorati",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} dark:bg-gray-900`}>
                <MainProvider>{children}</MainProvider>
            </body>
        </html>
    );
}
