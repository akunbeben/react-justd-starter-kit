import { useState } from 'react';
import { Providers } from '@/components/providers';
import { SidebarProvider } from '@/components/ui/sidebar';

interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [isOpen, setIsOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar') !== 'false' : true));

    const handleSidebarChange = (open: boolean) => {
        setIsOpen(open);

        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar', String(open));
        }
    };

    return (
        <SidebarProvider defaultOpen={isOpen} isOpen={isOpen} onOpenChange={handleSidebarChange}>
            <Providers>
                {children}
            </Providers>
        </SidebarProvider>
    );
}
