import { Avatar } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type User } from '@/types';
import { Button } from '@/components/ui/button';
import { IconChevronsUpDown } from 'justd-icons';

export function UserInfo({ user, showEmail = false, showIcon = false }: { user: User; showEmail?: boolean; showIcon?: boolean }) {
    const getInitials = useInitials();

    return (
        <>
            <div className="flex gap-2 items-center">
                <Avatar shape="circle" src={user.avatar} initials={getInitials(user.name)} />
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    {showEmail && <span className="text-muted-foreground truncate text-xs">{user.email}</span>}
                </div>
            </div>

            {showIcon && (
                <IconChevronsUpDown
                    data-slot="chevron"
                    className="absolute right-3 size-4 transition-transform group-pressed:rotate-180"
                />
            )}
        </>
    );
}
