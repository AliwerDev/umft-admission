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
    title: 'Elektron menyu',
    description: "Elektron menyu - davlat bog'chalari uchun onlayn taomnoma nazorati",
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
