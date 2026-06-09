"use client";

import { useState } from "react";
import Select from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon, HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type ClubTab = "clubs" | "longRuns" | "locations";

const clubTabs: { key: ClubTab; label: string }[] = [
  { key: "clubs", label: "Беговые клубы" },
  { key: "longRuns", label: "Длительные в компании" },
  { key: "locations", label: "Локации для пробежки" },
];

const clubFilters = {
  city: [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
  ],
  surface: [
    { label: "Асфальт", value: "asphalt" },
    { label: "Грунт", value: "ground" },
    { label: "Трейл", value: "trail" },
  ],
  format: [
    { label: "Онлайн", value: "online" },
    { label: "Офлайн", value: "offline" },
  ],
};

const clubsData = [
  {
    id: 1,
    name: "Wolf Pack",
    leader: "Степан Киселева",
    image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
    lat: 55.751,
    lng: 37.617,
    likes: 16,
    comments: 3,
  },
  {
    id: 2,
    name: "Thunder Gang",
    leader: "Александр Стрелков",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    lat: 55.763,
    lng: 37.632,
    likes: 24,
    comments: 7,
  },
  {
    id: 3,
    name: "Run Moscow",
    leader: "Елена Петрова",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    lat: 55.742,
    lng: 37.608,
    likes: 31,
    comments: 5,
  },
];

const longRunsData = [
  {
    id: 1,
    name: "Die Hard Run",
    level: "Продвинутые любители",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    name: "Sunday Long Run",
    level: "Начинающие",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    likes: 19,
    comments: 2,
  },
];

function ClubCard({ club }: { club: typeof clubsData[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-3 pb-6 border-b border-border-light last:border-0">
      <div>
        <div className="text-sm font-medium text-text-primary">
          Клуб: <span className="font-semibold">{club.name}</span>
        </div>
        <div className="text-xs text-text-secondary mt-0.5">
          Руководитель: <span>{club.leader}</span>
        </div>
        <a href="#" className="text-xs text-primary hover:underline mt-0.5 inline-block">
          Ссылка на сайт
        </a>
      </div>
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-4 pt-1">
        <button onClick={() => setLiked(!liked)} className="flex items-center gap-1.5 text-sm transition-colors">
          {liked ? <HeartSolid className="w-5 h-5 text-red-500" /> : <HeartIcon className="w-5 h-5 text-text-tertiary" />}
          <span className={liked ? "text-red-500 font-medium" : "text-text-tertiary"}>{liked ? club.likes + 1 : club.likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          <span>{club.comments}</span>
        </button>
      </div>
    </div>
  );
}

function LongRunCard({ run }: { run: typeof longRunsData[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-3 pb-6 border-b border-border-light last:border-0">
      <div>
        <div className="text-sm font-medium text-text-primary">
          Локация: <span className="font-semibold">{run.name}</span>
        </div>
        <div className="text-xs text-text-secondary mt-0.5">
          Формат: <span>{run.level}</span>
        </div>
        <a href="#" className="text-xs text-primary hover:underline mt-0.5 inline-block">
          Ссылка на сайт
        </a>
      </div>
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={run.image} alt={run.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-4 pt-1">
        <button onClick={() => setLiked(!liked)} className="flex items-center gap-1.5 text-sm transition-colors">
          {liked ? <HeartSolid className="w-5 h-5 text-red-500" /> : <HeartIcon className="w-5 h-5 text-text-tertiary" />}
          <span className={liked ? "text-red-500 font-medium" : "text-text-tertiary"}>{liked ? run.likes + 1 : run.likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors">
          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
          <span>{run.comments}</span>
        </button>
      </div>
    </div>
  );
}

export default function ClubsPage() {
  const [activeTab, setActiveTab] = useState<ClubTab>("clubs");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [city, setCity] = useState("");
  const [surface, setSurface] = useState("");
  const [format, setFormat] = useState("");

  return (
    <div className="p-4 lg:p-6">
      {/* Interactive Map — ONE map at the top */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden mb-6 relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=37.4%2C55.6%2C37.85%2C55.85&layer=mapnik&marker=55.751%2C37.617"
          className="w-full h-full border-0"
          title="Карта клубов"
        />
        {/* Map pins overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {clubsData.map((club) => (
            <div
              key={club.id}
              className="absolute w-6 h-6 -translate-x-1/2 -translate-y-full"
              style={{
                left: `${((club.lng - 37.4) / (37.85 - 37.4)) * 100}%`,
                top: `${((55.85 - club.lat) / (55.85 - 55.6)) * 100}%`,
              }}
            >
              <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">{club.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search + filter toggle */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 flex items-center border border-border rounded-lg bg-surface px-3 py-2.5">
          <input
            type="text"
            placeholder={
              activeTab === "clubs"
                ? "Поиск по беговым клубам"
                : activeTab === "longRuns"
                ? "Поиск по пробежкам"
                : "Поиск по локациям для пробежки"
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-text-tertiary ml-2" />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-lg border transition-colors shrink-0",
            showFilters
              ? "border-primary bg-primary text-white"
              : "border-border text-text-tertiary hover:border-text-tertiary"
          )}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
        </button>
      </div>

      {/* Collapsible filters */}
      {showFilters && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4 animate-in slide-in-from-top-2 duration-200">
          <Select
            options={clubFilters.city}
            value={city}
            onChange={setCity}
            placeholder="Выберите город"
          />
          {activeTab === "clubs" && (
            <>
              <Select
                options={[{ label: "Кол-во подписчиков", value: "subscribers" }]}
                value=""
                onChange={() => {}}
                placeholder="Кол-во подписчиков"
              />
              <Select
                options={clubFilters.format}
                value={format}
                onChange={setFormat}
                placeholder="Формат"
              />
              <button
                onClick={() => { setCity(""); setFormat(""); }}
                className="text-sm text-primary hover:underline px-3 py-2.5"
              >
                Сбросить
              </button>
            </>
          )}
          {activeTab === "longRuns" && (
            <>
              <Select options={[{ label: "Темп", value: "pace" }]} value="" onChange={() => {}} placeholder="Темп" />
              <Select options={[{ label: "Длина маршрута", value: "length" }]} value="" onChange={() => {}} placeholder="Длина маршрута" />
              <Select options={clubFilters.format} value={format} onChange={setFormat} placeholder="Формат" />
              <button onClick={() => { setCity(""); setFormat(""); }} className="text-sm text-primary hover:underline px-3 py-2.5">Сбросить</button>
            </>
          )}
          {activeTab === "locations" && (
            <>
              <Select options={[{ label: "Тип покрытия", value: "surface" }]} value={surface} onChange={setSurface} placeholder="Тип покрытия" />
              <Select options={[{ label: "Длина маршрута", value: "length" }]} value="" onChange={() => {}} placeholder="Длина маршрута" />
              <Select options={[{ label: "Сложность", value: "difficulty" }]} value="" onChange={() => {}} placeholder="Сложность" />
              <button onClick={() => { setCity(""); setSurface(""); }} className="text-sm text-primary hover:underline px-3 py-2.5">Сбросить</button>
            </>
          )}
        </div>
      )}

      {/* Tabs */}
      <div className="flex justify-center gap-6 border-b border-border-light mb-6">
        {clubTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "pb-3 text-sm transition-colors relative",
              activeTab === tab.key
                ? "text-primary font-medium"
                : "text-text-tertiary hover:text-text-secondary"
            )}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "clubs" && (
        <div className="space-y-6">
          {clubsData.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}

      {activeTab === "longRuns" && (
        <div className="space-y-6">
          {longRunsData.map((run) => (
            <LongRunCard key={run.id} run={run} />
          ))}
        </div>
      )}

      {activeTab === "locations" && (
        <div className="space-y-6">
          <div className="space-y-3 pb-6 border-b border-border-light">
            <div>
              <div className="text-sm font-semibold text-text-primary">Wolf Park</div>
            </div>
            <div className="w-full h-[200px] rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80"
                alt="Wolf Park"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 pt-1">
              <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-red-500 transition-colors">
                <HeartIcon className="w-5 h-5" />
                <span>16</span>
              </button>
              <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors">
                <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                <span>3</span>
              </button>
            </div>
          </div>

          {/* Article section */}
          <div className="mt-4">
            <h3 className="text-base font-semibold text-text-primary mb-4">Стрим в Нижнем Новгороде</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden bg-gray-700 h-[180px] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-orange-700/30" />
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider bg-red-600/80 px-2 py-0.5 rounded">Комитет бегунов</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <p className="text-white text-sm font-medium leading-snug">
                    «Хорошо, что есть марафон»: бегуны недовольны революцией
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gray-700 h-[180px] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-700/30" />
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider bg-blue-600/80 px-2 py-0.5 rounded">Детям и взрослым</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <p className="text-white text-sm font-medium leading-snug">
                    «Хорошо, что есть марафон»: бегуны недовольны революцией
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
