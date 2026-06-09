"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
  BellIcon,
  ArrowRightOnRectangleIcon,
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

// Group indexes for separators: after items 2 (Для организаторов) and 7 (Российские старты)
const separatorAfter = [2, 7];

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-white shadow-modal transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col rounded-r-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* User header */}
        <div className="px-5 pt-6 pb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                alt="Саша Марафонов"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-surface-secondary transition-colors">
              <BellIcon className="w-5 h-5 text-text-tertiary" />
            </button>
          </div>
          <div className="text-base font-semibold text-text-primary">Саша Марафонов</div>
          <div className="text-sm text-text-tertiary">Привет, Саша!</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-2">
          {sideNavItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isActive = pathname === item.href;
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-primary text-white font-medium"
                      : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                  )}
                >
                  {Icon && <Icon className="w-5 h-5 shrink-0" />}
                  <span>{item.label}</span>
                </Link>
                {separatorAfter.includes(index) && (
                  <div className="my-2 border-t border-border-light" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout icon */}
        <div className="px-5 py-4 border-t border-border-light">
          <Link
            href="/auth"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
