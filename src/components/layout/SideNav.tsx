"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { sideNavItems } from "@/data/mock";
import {
  MagnifyingGlassIcon,
  MapIcon,
  FlagIcon,
  NewspaperIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  HeartIcon,
  CalendarDaysIcon,
  InformationCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ElementType> = {
  search: MagnifyingGlassIcon,
  map: MapIcon,
  flag: FlagIcon,
  newspaper: NewspaperIcon,
  building: BuildingOffice2Icon,
  shopping: ShoppingBagIcon,
  heart: HeartIcon,
  calendar: CalendarDaysIcon,
  info: InformationCircleIcon,
};

const clubSubItems = [
  { label: "Беговые клубы", href: "/clubs" },
  { label: "Длительные в компании", href: "/clubs?tab=longRuns" },
  { label: "Рассказать о маршруте", href: "/route" },
];

export default function SideNav() {
  const pathname = usePathname();
  const isClubsSection = pathname === "/clubs" || pathname === "/route";
  const [clubsExpanded, setClubsExpanded] = useState(isClubsSection);

  // Collapse clubs submenu when navigating away from clubs section
  useEffect(() => {
    if (!isClubsSection) {
      setClubsExpanded(false);
    }
  }, [isClubsSection]);

  return (
    <nav className="hidden lg:flex lg:flex-col w-[220px] shrink-0 py-4 pr-4 sticky top-[112px] self-start max-h-[calc(100vh-124px)] overflow-y-auto no-scrollbar">
      <div className="space-y-0.5">
        {sideNavItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          const isClubsItem = item.href === "/clubs";

          if (isClubsItem) {
            return (
              <div key={item.href}>
                <button
                  onClick={() => setClubsExpanded(!clubsExpanded)}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] leading-tight transition-colors",
                    isClubsSection
                      ? "bg-primary text-white font-medium"
                      : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  <span className="flex-1 text-left">{item.label}</span>
                  {clubsExpanded ? (
                    <ChevronUpIcon className="w-3.5 h-3.5 shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-3.5 h-3.5 shrink-0" />
                  )}
                </button>
                {clubsExpanded && (
                  <div className="ml-7 mt-1 space-y-0.5">
                    {clubSubItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-[12px] leading-tight transition-colors",
                          pathname === sub.href
                            ? "text-primary font-medium"
                            : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] leading-tight transition-colors",
                isActive
                  ? "bg-primary text-white font-medium"
                  : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
              )}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
