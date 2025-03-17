import { Sidebar, SidebarLabel } from '@/components/ui/sidebar';
import { Menu } from '@/components/ui/menu';
import { Avatar } from '@/components/ui/avatar';
import { type NavItem } from '@/types';
import { type ComponentPropsWithoutRef } from 'react';
import { IconChevronLgDown, IconCommandRegular, IconDashboard, IconHeadphones, IconLogout, IconSettings, IconShield } from 'justd-icons';

export function NavFooter({ items }: ComponentPropsWithoutRef<typeof Menu> & { items: NavItem[]; }) {
    return (
        <Menu>
            <Menu.Trigger className="group" aria-label="Profile" data-slot="menu-trigger">
                <Avatar shape="square" src="/images/avatar/cobain.jpg" />
                <div className="in-data-[sidebar-collapsible=dock]:hidden text-sm">
                    <SidebarLabel>Kurt Cobain</SidebarLabel>
                    <span className="-mt-0.5 block text-muted-fg">kurt@cobain.com</span>
                </div>
                <IconChevronLgDown
                    data-slot="chevron"
                    className="absolute right-3 size-4 transition-transform group-pressed:rotate-180"
                />
            </Menu.Trigger>
            <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
                <Menu.Section>
                    <Menu.Header separator>
                        <span className="block">Kurt Cobain</span>
                        <span className="font-normal text-muted-fg">@cobain</span>
                    </Menu.Header>
                </Menu.Section>

                <Menu.Item href="#dashboard">
                    <IconDashboard />
                    Dashboard
                </Menu.Item>
                <Menu.Item href="#settings">
                    <IconSettings />
                    Settings
                </Menu.Item>
                <Menu.Item href="#security">
                    <IconShield />
                    Security
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item>
                    <IconCommandRegular />
                    Command Menu
                </Menu.Item>

                <Menu.Item href="#contact">
                    <IconHeadphones />
                    Customer Support
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href="#logout">
                    <IconLogout />
                    Log out
                </Menu.Item>
            </Menu.Content>
        </Menu>
    );
}
