import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Next.js SignUp Page | TailAdmin - Next.js Dashboard Template',
    description: 'This is Next.js SignUp Page TailAdmin Dashboard Template',
    // other metadata
};

export default function Ecommerce() {
    redirect('/dashboard');
    return null;
}
