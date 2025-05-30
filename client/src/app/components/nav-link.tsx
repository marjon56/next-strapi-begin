"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive =
    pathname === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={cn(
          isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
        )}
      >
        {children}
      </Link>
    </li>
  );
}
