import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'REGISTON AVIAPOCHTA',
    description: 'REGISTON AVIAPOCHTA',
    // other metadata
};

export default async function Home() {
    redirect('/dashboard');
}
