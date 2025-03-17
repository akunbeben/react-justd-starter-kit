import { SidebarItem, SidebarLabel, SidebarSection } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarSection>
            {items.map((item, index) => (
                <SidebarItem tooltip={item.title} isCurrent={item.href === page.url} href={item.href} key={index}>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </SidebarItem>
            ))}
        </SidebarSection>
    );
}
