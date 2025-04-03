// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            role: string | 'super_admin' | 'director' | 'oblano';
            token: string;
        };
    }
}
