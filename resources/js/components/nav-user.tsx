"use client"

import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Button } from '@/components/ui';
import { Menu } from '@/components/ui/menu';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';

export function NavUser() {
    const { auth } = usePage<SharedData>().props;

    return (
        <Menu>
            <Button intent="plain" className="justify-between p-2 min-h-10 h-auto">
                <UserInfo user={auth.user} showIcon />
            </Button>

            <UserMenuContent user={auth.user} />
        </Menu>
    );
}
