"use client"

import { Link } from '@inertiajs/react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { NavItem } from "@/types"
import { IconBook, IconFolder, IconGrid4 } from "justd-icons"
import AppLogo from "./app-logo"
import { NavMain } from "./nav-main";
import { NavFooter } from "./nav-footer";
import { NavUser } from './nav-user';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <IconGrid4 />,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/akunbeben/react-justd-starter-kit',
        icon: <IconFolder />,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: <IconBook />,
    },
];

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <Link
                    className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
                    href="/dashboard"
                >
                    <AppLogo />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="flex flex-col gap-2 p-2">
                <NavFooter items={footerNavItems} />
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
