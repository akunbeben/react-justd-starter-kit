import { SidebarProvider } from '@/components/ui/sidebar';
import { router } from "@inertiajs/react"
import { useState } from 'react';
import { RouterProvider } from 'react-aria-components';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    const [isOpen, setIsOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar') !== 'false' : true));

    const handleSidebarChange = (open: boolean) => {
        setIsOpen(open);

        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar', String(open));
        }
    };

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <RouterProvider navigate={(to, options) => router.visit(to, options)}>
            <SidebarProvider defaultOpen={isOpen} isOpen={isOpen} onOpenChange={handleSidebarChange}>
                {children}
            </SidebarProvider>
        </RouterProvider>
    );
}
