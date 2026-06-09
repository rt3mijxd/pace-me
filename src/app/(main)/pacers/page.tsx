"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";
import { cn } from "@/lib/utils";
import { HeartIcon, ChatBubbleOvalLeftIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

type PacerView = "form" | "feed";

function PacerFeedPost({ author, date, text, avatar }: { author: string; date: string; text: string; avatar: string }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="pb-6 border-b border-border-light">
      {/* Author header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-text-primary">{author}</div>
          <div className="text-xs text-text-tertiary">{date}</div>
        </div>
        <button className="p-1 text-text-tertiary hover:text-text-secondary">
          <EllipsisVerticalIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Map image */}
      <div className="rounded-xl overflow-hidden mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
          alt="Карта маршрута"
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Post text */}
      <p className="text-sm text-text-primary mb-3">{text}</p>

      {/* Actions row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-1.5 text-sm transition-colors"
          >
            {liked ? (
              <HeartSolid className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 text-text-tertiary" />
            )}
            <span className={liked ? "text-red-500 font-medium" : "text-text-tertiary"}>
              {liked ? 17 : 16}
            </span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-secondary transition-colors">
            <ChatBubbleOvalLeftIcon className="w-5 h-5" />
            <span>3</span>
          </button>
        </div>
        <button className="px-4 py-1.5 text-sm border border-border rounded-full text-text-primary hover:border-primary hover:text-primary transition-colors">
          Стань моим пейсером
        </button>
      </div>
    </div>
  );
}

function PacerStatsCard() {
  return (
    <div className="bg-white rounded-xl border border-border-light p-5">
      <h3 className="text-base font-semibold text-text-primary mb-4">Наши результаты</h3>
      <div className="space-y-4">
        <div>
          <div className="text-2xl font-bold text-text-primary">500</div>
          <div className="text-xs text-text-tertiary">личных рекордов</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-text-primary">1 500</div>
          <div className="text-xs text-text-tertiary">километров</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-text-primary">1 000</div>
          <div className="text-xs text-text-tertiary">Спасибо</div>
        </div>
      </div>
    </div>
  );
}

function PacerInfoBlock() {
  return (
    <div className="bg-white rounded-xl border border-border-light p-5 mt-4">
      <h3 className="text-sm font-semibold text-text-primary mb-3">
        Кто такой пейсер и зачем он нужен?
      </h3>
      <p className="text-xs text-text-secondary leading-relaxed mb-4">
        Пейсер — это бегун, который помогает другим бегунам поддерживать правильный темп на забеге. Он бежит с заранее заданной скоростью, чтобы его напарник мог ориентироваться на него и достичь своей цели (например, финишировать за 1:30 в полумарафоне).
      </p>
      <p className="text-xs text-text-secondary leading-relaxed mb-4">
        Пейсеры особенно полезны для:<br />
        — поддержания равномерного темпа,<br />
        — мотивации на дистанции,<br />
        — ориентира при дебюте или личном рекорде.
      </p>
      <Button className="w-full">Найти пейсера</Button>
    </div>
  );
}

export default function PacersPage() {
  const [view, setView] = useState<PacerView>("form");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="p-4 lg:p-6">
      {/* View tabs */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => setView("form")}
          className={cn(
            "text-sm transition-colors",
            view === "form" ? "text-primary font-medium" : "text-text-tertiary hover:text-text-secondary"
          )}
        >
          Найти пейсера
        </button>
        <button
          onClick={() => setView("feed")}
          className={cn(
            "text-sm transition-colors",
            view === "feed" ? "text-primary font-medium" : "text-text-tertiary hover:text-text-secondary"
          )}
        >
          Лента активности
        </button>
      </div>

      {view === "form" && (
        <div>
          <h1 className="text-xl font-semibold text-text-primary mb-6">Информация</h1>

          <div className="max-w-xl space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Информация о забеге
              </label>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Название забега - Московский марафон 2025<br />
                Город, дата и время старта - Москва 25.09.2025 в 06:00<br />
                Дистанция - 42.2 км
              </p>
            </div>

            <Input
              label="Желаемый результат"
              placeholder="3:00 (темп 4:16 мин/км/бегуна)"
            />

            <Input
              label="Размер оплаты пейсеру"
              placeholder="1 000 рублей"
            />

            <p className="text-xs text-text-tertiary">
              Комиссия платформы для пейсера 10 %, для заказчика 10 рублей
            </p>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Контактные данные
              </label>
              <Input
                placeholder="Контакты для связи (телефон, мас телеграм, мис чат)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Комментарий
              </label>
              <Input
                placeholder="Важное без предварительного мечтательного статуса"
              />
            </div>

            <Button onClick={() => setShowSuccess(true)}>
              Отправить заявку
            </Button>
          </div>

          <SuccessModal
            isOpen={showSuccess}
            onClose={() => setShowSuccess(false)}
            title="Заявка успешно отправлена!"
            description="Информация о забеге передана в работу нашим модераторам"
          />
        </div>
      )}

      {view === "feed" && (
        <div className="flex gap-6">
          {/* Feed column */}
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-semibold text-text-primary mb-6">Лента активности</h1>
            <div className="space-y-6">
              <PacerFeedPost
                author="Милан Кобрин"
                date="25 минут назад"
                text="Я снова в строю – берегите ваши марафоны!!"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              />
              <PacerFeedPost
                author="Милан Кобрин"
                date="25 минут назад"
                text="Я снова в строю – берегите ваши марафоны!!"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              />
              <PacerFeedPost
                author="Милан Кобрин"
                date="25 минут назад"
                text="Я снова в строю – берегите ваши марафоны!!"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              />
            </div>
          </div>

          {/* Stats sidebar — desktop only */}
          <div className="hidden lg:block w-[240px] shrink-0">
            <PacerStatsCard />
            <PacerInfoBlock />
          </div>
        </div>
      )}
    </div>
  );
}
