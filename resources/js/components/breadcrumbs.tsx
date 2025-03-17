import { Breadcrumbs, BreadcrumbsItem } from '@/components/ui/breadcrumbs';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function BreadcrumbsComponent({ breadcrumbs }: { breadcrumbs: BreadcrumbItemType[] }) {
    return (
        <>
            {breadcrumbs.length > 0 && (
                <Breadcrumbs>
                    {breadcrumbs.map((item, index) => (
                        <BreadcrumbsItem key={index} href={item.href}>{item.title}</BreadcrumbsItem>
                    ))}
                </Breadcrumbs>
            )}
        </>
    );
}
