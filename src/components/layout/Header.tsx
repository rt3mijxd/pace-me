"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AdBanner from "@/components/ui/AdBanner";
import Drawer from "./Drawer";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const pageTitles: Record<string, string> = {
  "/": "Лента новостей",
  "/pacers": "Найти пейсера",
  "/route": "Рассказать о маршруте",
  "/organizer": "Для организаторов",
  "/clubs": "Клубы и локации",
  "/gear": "Всё для бега",
  "/health": "Здоровье бегуна",
  "/events": "Российские старты",
  "/about": "О проекте",
  "/auth": "Авторизация",
  "/auth/forgot-password": "Восстановление пароля",
  "/auth/new-password": "Новый пароль",
  "/profile": "Личный кабинет",
};

// Simulated auth state — set to true for logged-in experience
const IS_LOGGED_IN = true;
const USER = {
  name: "Саша Марафонов",
  greeting: "Привет, Саша!",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
};

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || "";

  return (
    <>
      <header className="z-40 bg-white rounded-2xl">
        <div className="flex items-center justify-between h-[80px] lg:h-[100px] px-4 lg:px-6">
          {/* Left: burger (mobile) + Logo (desktop) */}
          <div className="flex items-center gap-3 shrink-0 w-[200px]">
            <button
              className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-surface-secondary transition-colors"
              onClick={() => setDrawerOpen(true)}
            >
              <Bars3Icon className="w-6 h-6 text-text-primary" />
            </button>

            <Link href="/" className="hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="PACE ME" className="h-[64px] w-auto" />
            </Link>
          </div>

          {/* Center: page title (mobile) / Ad banner (desktop) */}
          <div className="flex-1 flex justify-center items-center px-4 min-w-0">
            {/* Mobile page title */}
            {pageTitle && (
              <span className="lg:hidden text-sm font-medium text-text-primary truncate">
                {pageTitle}
              </span>
            )}
            {/* Desktop ad banner — fixed max-width, not stretching */}
            <div className="hidden lg:block max-w-[728px]">
              <AdBanner size="leaderboard" label="Adidas" className="rounded-xl" />
            </div>
          </div>

          {/* Right: user area (desktop) / Logo (mobile) */}
          <div className="flex items-center gap-3 shrink-0 justify-end w-[200px]">
            {/* Mobile: small logo on right */}
            <Link href="/" className="lg:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="PACE ME" className="h-[48px] w-auto" />
            </Link>

            {/* Desktop: user area */}
            <div className="hidden lg:flex items-center gap-3">
              {IS_LOGGED_IN ? (
                <>
                  <Link href="/profile" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={USER.avatar} alt={USER.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary leading-tight">
                        {USER.name}
                      </div>
                      <div className="text-xs text-text-tertiary leading-tight">
                        {USER.greeting}
                      </div>
                    </div>
                  </Link>
                  <button className="p-2 rounded-lg hover:bg-surface-secondary transition-colors">
                    <BellIcon className="w-5 h-5 text-text-secondary" />
                  </button>
                  <Link
                    href="/auth"
                    className="p-2 rounded-lg hover:bg-surface-secondary transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 text-text-secondary" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="w-9 h-9 rounded-full bg-surface-secondary border border-border flex items-center justify-center">
                    <svg className="w-5 h-5 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary leading-tight">
                      Зарегистрируйтесь
                    </div>
                    <div className="text-xs text-text-tertiary leading-tight">
                      или войдите в профиль
                    </div>
                  </div>
                  <Link
                    href="/auth"
                    className="p-2 rounded-lg hover:bg-surface-secondary transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 text-text-secondary" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
