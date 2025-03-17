import { UserInfo } from '@/components/user-info';
import { type User } from '@/types';
import { Menu } from '@/components/ui/menu';
import { IconLogout, IconSettings } from 'justd-icons';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    return (
        <Menu.Content placement="bottom" className="sm:min-w-[calc(var(--trigger-width)-8px)]">
            <Menu.Section>
                <Menu.Header separator>
                    <UserInfo user={user} showEmail />
                </Menu.Header>
            </Menu.Section>

            <Menu.Item href="/settings/profile">
                <IconSettings />
                Settings
            </Menu.Item>

            <Menu.Separator />

            {/* @ts-expect-error routerOptions */}
            <Menu.Item routerOptions={{ method: "post" }} href={route("logout")} onAction={cleanup}>
                <IconLogout />
                Log out
            </Menu.Item>
        </Menu.Content>
    );
}
