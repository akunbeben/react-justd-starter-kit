import { SidebarFooter, SidebarLabel, useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Avatar, Menu } from '@/components/ui';
import { IconChevronLgDown, IconCommandRegular, IconDashboard, IconHeadphones, IconLogout, IconSettings, IconShield } from 'justd-icons';

export function NavUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <SidebarFooter>
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
        </SidebarFooter>
    );
}
