import { BuildingIcon, CalenderIcon, DatabaseIcon, DollarIcon, ListIcon, MeatIcon, SettingsIcon, UserIcon } from '@/icons';

export type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

export const routesByRole: Record<string, NavItem[]> = {
    super_admin: [
        {
            icon: <BuildingIcon />,
            name: 'Viloyatlar',
            path: '/dashboard/provinces',
        },
        {
            icon: <CalenderIcon />,
            name: "Ta'til kunlari",
            path: '/dashboard/dates',
        },
    ],
    oblano: [
        {
            icon: <DatabaseIcon />,
            name: 'Baza',
            subItems: [
                {
                    name: 'Tumanlar',
                    path: '/dashboard/regions',
                },
                {
                    name: "Bog'chalar",
                    path: '/dashboard/organizations',
                },
                {
                    name: 'Yetkazib beruvchilar',
                    path: '/dashboard/deliveries',
                },
            ],
        },
        {
            icon: <MeatIcon />,
            name: 'Taomnoma',
            subItems: [
                {
                    name: 'Taomlar',
                    path: '/dashboard/foods',
                },
                {
                    name: 'Mahsulotlar',
                    path: '/dashboard/products',
                },
                {
                    name: 'Taom mahsulotlari',
                    path: '/dashboard/food-products',
                },
                {
                    name: 'Ovqatlanish vaqtlari',
                    path: '/dashboard/routines',
                },
            ],
        },
        {
            icon: <SettingsIcon />,
            name: 'Sozlamalar',
            path: '/dashboard/api-settings',
        },
    ],
    delivery_company: [
        {
            icon: <ListIcon />,
            name: 'Buyurtmalar',
            path: '/dashboard/orders',
        },
    ],
    rayono: [
        {
            icon: <DollarIcon />,
            name: 'Narxlar',
            path: '/dashboard/prices',
        },
    ],
};

export const allRoleRoutes: NavItem[] = [
    {
        icon: <UserIcon />,
        name: 'Profil',
        path: '/dashboard/profile',
    },
];

const useRoutes = (user?: any) => {
    const rotes = routesByRole[user?.role as keyof typeof routesByRole] ?? [];
    return [...rotes, ...allRoleRoutes];
};

export default useRoutes;
