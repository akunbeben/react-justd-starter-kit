import { SidebarItem, SidebarLabel, SidebarSection, SidebarSectionGroup } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { type ComponentPropsWithoutRef } from 'react';

export function NavFooter({ items }: ComponentPropsWithoutRef<typeof SidebarSectionGroup> & { items: NavItem[]; }) {
    const Icon = ({ item }: { item: NavItem }) => item.icon;

    return (
        <SidebarSection>
            {items.map((item, index) => (
                <SidebarItem
                    tooltip={item.title}
                    href={item.href}
                    target="_blank"
                    key={index}
                >
                    <Icon item={item} />
                    <SidebarLabel>{item.title}</SidebarLabel>
                </SidebarItem>
            ))}
        </SidebarSection>
    );
}
