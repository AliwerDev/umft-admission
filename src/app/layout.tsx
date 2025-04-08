import { Outfit } from 'next/font/google';
import MainProvider from '@/providers/MainProvider';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    variable: '--font-outfit-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'REGISTON AVIAPOCHTA',
    description: 'Xalqaro pochta xizmati — Turkiyadan O‘zbekistonga yetkazish endi yanada oson',
};

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={nunito.className}>
            <body className={`${outfit.variable} dark:bg-gray-900`}>
                <MainProvider>{children}</MainProvider>
            </body>
        </html>
    );
}
