import { getIronSession, SessionOptions } from 'iron-session';
import { NextRequest } from 'next/server';

const sessionOptions: SessionOptions = {
    cookieName: 'session_token',
    password: process.env.SESSION_SECRET as string, // 32 ta belgili maxfiy kalit
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production', // HTTPS bo'lsa true
        httpOnly: true,
        sameSite: 'strict',
    },
};

export async function getSession(req: NextRequest) {
    return getIronSession(req, new Response(), sessionOptions);
}
