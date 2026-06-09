"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AboutTab = "privacy" | "terms";

export default function AboutPage() {
  const [tab, setTab] = useState<AboutTab>("privacy");

  return (
    <div className="p-4 lg:p-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-border-light mb-8">
        <button
          onClick={() => setTab("privacy")}
          className={cn(
            "pb-3 text-sm transition-colors relative",
            tab === "privacy"
              ? "text-primary font-medium"
              : "text-text-tertiary hover:text-text-secondary"
          )}
        >
          Политика конфиденциальности
          {tab === "privacy" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
          )}
        </button>
        <button
          onClick={() => setTab("terms")}
          className={cn(
            "pb-3 text-sm transition-colors relative",
            tab === "terms"
              ? "text-primary font-medium"
              : "text-text-tertiary hover:text-text-secondary"
          )}
        >
          Пользовательское соглашение
          {tab === "terms" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
          )}
        </button>
      </div>

      {tab === "privacy" && (
        <div className="max-w-2xl">
          <h1 className="text-lg font-semibold text-text-primary mb-6">
            Политика конфиденциальности
          </h1>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>1. Общие положения</p>
            <p>2. Персональная информация Пользователей, которую получает и обрабатывает Компания</p>
            <p>3. Основные права Пользователей</p>
            <p>4. Цели обработки персональной информации Пользователей</p>
            <p>5. Условия обработки персональной информации Пользователей и её передачи третьим лицам</p>
            <p>6. Меры, принимаемые для защиты персональной информации Пользователей</p>
            <p>7. Основные обязательства перед Компанией и Пользователем</p>
            <p>8. Обращения и запросы Пользователей и уполномоченных органов</p>
            <p>9. Дополнительные условия</p>
            <div className="pt-6 text-xs text-text-tertiary">
              <p>Дата публикации: XX.XX.XXXX</p>
              <p>Дата вступления в силу: XX.XX.XXXX</p>
            </div>
          </div>
        </div>
      )}

      {tab === "terms" && (
        <div className="max-w-2xl">
          <h1 className="text-lg font-semibold text-text-primary mb-6">
            Пользовательское соглашение об условиях использования сайта
          </h1>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>1. Термины и определения</p>
            <p>2. Общие положения</p>
            <p>3. Регистрация и авторизация на Сайте</p>
            <p>4. Контент</p>
            <p>5. Использование Электронных ресурсов</p>
            <p>6. Дополнительный функционал Электронных ресурсов. Взаимодействие с Партнерами</p>
            <p>7. Иные положения</p>
            <p>8. Информация о Компании</p>
            <div className="pt-6 text-xs text-text-tertiary">
              <p>Дата публикации: XX.XX.XXXX</p>
              <p>Дата вступления в силу: XX.XX.XXXX</p>
              <br />
              <p>Дата публикации: XX.XX.XXXX</p>
              <p>Дата вступления в силу: XX.XX.XXXX</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
