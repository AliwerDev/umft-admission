import axios from 'axios';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                login: { label: 'Login', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const res = await axios.get('https://api.elektron-menyu.uz/api/Auth/Login', {
                        params: credentials,
                    });
                    return res.data;
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    debug: true,
};
