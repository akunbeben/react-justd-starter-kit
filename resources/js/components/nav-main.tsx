import { SidebarItem, SidebarLabel, SidebarSection, SidebarSectionGroup } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const Icon = ({ item }: { item: NavItem }) => item.icon;

    return (
        <SidebarSectionGroup>
            <SidebarSection title="Platform">
                {items.map((item, index) => (
                    <SidebarItem
                        tooltip={item.title}
                        isCurrent={item.href === page.url}
                        href={item.href}
                        key={index}
                    >
                        <Icon item={item} />
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </SidebarItem>
                ))}
            </SidebarSection>
        </SidebarSectionGroup>
    );
}
