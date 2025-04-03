import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { allRoleRoutes, routesByRole } from './hooks/use-routes';

const isRouteMatch = (pathname: string, route: any): boolean => {
    if (route.path) return pathname.startsWith(route.path);
    return route.subItems?.some((sub: any) => pathname.startsWith(sub.path));
};

export default withAuth(
    function middleware(req) {
        const url = req.nextUrl;
        const user = req.nextauth.token;

        const role = user?.role as keyof typeof routesByRole;
        const accessRoutes = routesByRole[role] || [];

        if (!role || !routesByRole[role]) {
            return NextResponse.redirect(new URL('/auth/signin', req.url));
        }

        const isAccessRoute =
            accessRoutes.some((route) => isRouteMatch(url.pathname, route)) || allRoleRoutes.some((route) => isRouteMatch(url.pathname, route));

        if (!isAccessRoute) {
            const fallbackPath = accessRoutes[0]?.path || allRoleRoutes[0]?.path || '/auth/signin';
            return NextResponse.redirect(new URL(fallbackPath, req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
);

export const config = {
    matcher: ['/dashboard/:path*'],
};
