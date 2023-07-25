"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map(({ id, name }: { id: string; name: string }) => ({
    href: `/category/${id}`,
    label: name,
    active: pathname === `/category/${id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map(
        ({
          href,
          label,
          active,
        }: {
          href: string;
          label: string;
          active: boolean;
        }) => (
          <Link
            key={href}
            href={href}
            className={
              (cn("text-sm font-medium transition-colors hover:text-black"),
              active ? "text-black" : "text-neutral-500")
            }
          >
            {label}
          </Link>
        )
      )}
    </nav>
  );
};

export default MainNav;
