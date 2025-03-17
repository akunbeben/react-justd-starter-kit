import { router } from '@inertiajs/react'
import { ThemeProvider } from './theme-provider'
import React from 'react'
import { RouterProvider } from 'react-aria-components';

declare module 'react-aria-components' {
    interface RouterConfig {
        routerOptions: { replace?: boolean };
    }
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RouterProvider navigate={(to, options) => router.visit(to, options)}>
            <ThemeProvider defaultTheme="system" storageKey="ui-theme">
                {children}
            </ThemeProvider>
        </RouterProvider>
    )
}
