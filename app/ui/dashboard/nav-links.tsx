'use client';

import * as HeroIcons from '@heroicons/react/24/outline'; // Adjusted import
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Debugging icons to ensure they're being imported correctly
console.log(HeroIcons.HomeIcon); // Should log the component
console.log(HeroIcons.DocumentDuplicateIcon);
console.log(HeroIcons.UserGroupIcon);

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HeroIcons.HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: HeroIcons.DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: HeroIcons.UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
