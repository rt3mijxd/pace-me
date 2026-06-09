"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";
import Modal from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

type ProfileTab = "profile" | "publications" | "applications" | "orders" | "notifications";

const profileTabs: { key: ProfileTab; label: string }[] = [
  { key: "profile", label: "Мой профиль" },
  { key: "publications", label: "Мои публикации" },
  { key: "applications", label: "Мои заявки" },
  { key: "orders", label: "Мои заказы" },
  { key: "notifications", label: "Настройки уведомлений" },
];

// Status dot component
function StatusDot({ color }: { color: string }) {
  const colorMap: Record<string, string> = {
    "text-yellow-600": "bg-yellow-500",
    "text-blue-600": "bg-blue-500",
    "text-green-600": "bg-green-500",
    "text-green-700": "bg-green-600",
    "text-red-600": "bg-red-500",
  };
  return <span className={cn("inline-block w-2 h-2 rounded-full mr-1.5", colorMap[color] || "bg-gray-400")} />;
}

// Profile tab content
function ProfileContent() {
  const [gender, setGender] = useState("Мужской");
  const [level, setLevel] = useState("Любитель");
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="max-w-xl">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden mb-2">
          <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
          </svg>
        </div>
        <div className="text-base font-semibold text-text-primary">Саша Марафонов</div>
      </div>

      <div className="space-y-5">
        <Input label="Имя" placeholder="Введите своё имя/фамилию" defaultValue="Саша" />
        <Input label="Фамилия" placeholder="Введите своё имя/фамилию" defaultValue="Марафонов" />

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Пол</label>
          <div className="flex gap-2">
            {["Мужской", "Женский"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-colors",
                  gender === g
                    ? "border-primary text-primary bg-primary-50"
                    : "border-border text-text-secondary hover:border-text-tertiary"
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <Input label="Телефон" placeholder="Введите в формате +7xxxxxxxxxx" />
        <Input label="Контактные данные" placeholder="Введите адрес электронной почты" />

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">Уровень подготовки</label>
          <div className="flex gap-2 flex-wrap">
            {["Начинающий", "Любитель", "Продвинутый"].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-colors",
                  level === l
                    ? "border-primary text-primary bg-primary-50"
                    : "border-border text-text-secondary hover:border-text-tertiary"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">О себе</label>
          <textarea
            placeholder="Расскажите ваши интересы и вообще что угодно"
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[80px] resize-none"
          />
        </div>

        {/* Notifications */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">Уведомления</label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">На почту</span>
              <button
                onClick={() => setEmailNotif(!emailNotif)}
                className={cn(
                  "w-10 h-6 rounded-full transition-colors relative",
                  emailNotif ? "bg-primary" : "bg-gray-300"
                )}
              >
                <span className={cn(
                  "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  emailNotif ? "left-[18px]" : "left-0.5"
                )} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Пуш-уведомления</span>
              <button
                onClick={() => setPushNotif(!pushNotif)}
                className={cn(
                  "w-10 h-6 rounded-full transition-colors relative",
                  pushNotif ? "bg-primary" : "bg-gray-300"
                )}
              >
                <span className={cn(
                  "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  pushNotif ? "left-[18px]" : "left-0.5"
                )} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button onClick={() => setShowSuccess(true)}>Сохранить</Button>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Информация успешно сохранена!"
        description="Данные вашего профиля обновлены"
      />
    </div>
  );
}

// Table for orders/applications
function OrdersTable({ type }: { type: "orders" | "applications" }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const items = [
    { name: "Поиск пейсера", status: "На рассмотрении", statusColor: "text-yellow-600", date: "18.05.2025", executor: "Зарубы М.", rating: 5 },
    { name: "Поиск пейсера", status: "В работе", statusColor: "text-blue-600", date: "18.05.2025", executor: "Зарубы М.", rating: 5 },
    { name: "Поиск напарника", status: "Выполнено", statusColor: "text-green-600", date: "18.05.2025", executor: "Павел С.", rating: 4 },
    { name: "Поиск лучшего друга", status: "Завершено", statusColor: "text-green-700", date: "18.05.2025", executor: "Исполнитель", rating: 3 },
    { name: "Поиск лучшего друга", status: "Отклонено", statusColor: "text-red-600", date: "18.05.2025", executor: "Исполнитель", rating: 3 },
  ];

  const label = type === "orders" ? "заказ" : "заявку";
  const successLabel = type === "orders" ? "Заказ" : "Заявка";

  return (
    <div>
      {/* Table header */}
      <div className="hidden sm:grid grid-cols-[1fr_120px_100px_100px_60px_60px] gap-2 px-3 py-2 bg-primary text-white text-xs font-medium rounded-t-lg">
        <span>Тема заявки</span>
        <span>Статус</span>
        <span>Дата создания</span>
        <span>Исполнитель</span>
        <span>Оценка</span>
        <span></span>
      </div>

      {/* Table rows */}
      <div className="divide-y divide-border-light border border-t-0 border-border-light rounded-b-lg">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_120px_100px_100px_60px_60px] gap-2 px-3 py-3 text-sm items-center">
            <span className="text-text-primary">{item.name}</span>
            <span className={cn("flex items-center text-xs", item.statusColor)}>
              <StatusDot color={item.statusColor} />
              {item.status}
            </span>
            <span className="text-xs text-text-secondary">{item.date}</span>
            <span className="text-xs text-text-secondary">{item.executor}</span>
            <span className="text-xs text-text-primary">{item.rating}</span>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-surface-secondary rounded transition-colors">
                <PencilIcon className="w-3.5 h-3.5 text-text-tertiary" />
              </button>
              <button
                onClick={() => setShowConfirm(true)}
                className="p-1 hover:bg-surface-secondary rounded transition-colors"
              >
                <TrashIcon className="w-3.5 h-3.5 text-text-tertiary" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm delete modal */}
      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)} size="sm">
        <div className="text-center">
          <p className="text-sm text-text-primary mb-4">
            Вы уверены, что хотите удалить свой {label}?
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setShowConfirm(false)}>
              Удалить
            </Button>
            <Button size="sm" onClick={() => { setShowConfirm(false); setShowSuccess(true); }}>
              Сохранить
            </Button>
          </div>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title={`${successLabel} успешно удалён${type === "applications" ? "а" : ""}!`}
      />
    </div>
  );
}

// Publications table
function PublicationsTable() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const items = [
    { title: "Как выбирать пейсера в 11 километрах?", status: "Опубликовано", statusColor: "text-green-600", date: "18.05.2025", views: "14555", likes: 15 },
    { title: "Почему на ДСТОР нам пробежать в Барнауле", status: "На модерации", statusColor: "text-yellow-600", date: "18.05.2025", views: "14555", likes: 15 },
    { title: "Я перестал бегать и мне стало лучше", status: "Отклонено", statusColor: "text-red-600", date: "18.05.2025", views: "14555", likes: 15 },
  ];

  return (
    <div>
      {/* Table header */}
      <div className="hidden sm:grid grid-cols-[1fr_120px_100px_80px_60px_60px] gap-2 px-3 py-2 bg-primary text-white text-xs font-medium rounded-t-lg">
        <span>Заголовок публикации</span>
        <span>Статус</span>
        <span>Дата создания</span>
        <span>Просмотры</span>
        <span>Баллы</span>
        <span></span>
      </div>

      {/* Table rows */}
      <div className="divide-y divide-border-light border border-t-0 border-border-light rounded-b-lg">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_120px_100px_80px_60px_60px] gap-2 px-3 py-3 text-sm items-center">
            <span className="text-text-primary text-xs">{item.title}</span>
            <span className={cn("flex items-center text-xs", item.statusColor)}>
              <StatusDot color={item.statusColor} />
              {item.status}
            </span>
            <span className="text-xs text-text-secondary">{item.date}</span>
            <span className="text-xs text-text-secondary">{item.views}</span>
            <span className="text-xs text-text-primary">{item.likes}</span>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-surface-secondary rounded transition-colors">
                <PencilIcon className="w-3.5 h-3.5 text-text-tertiary" />
              </button>
              <button
                onClick={() => setShowConfirm(true)}
                className="p-1 hover:bg-surface-secondary rounded transition-colors"
              >
                <TrashIcon className="w-3.5 h-3.5 text-text-tertiary" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm delete modal */}
      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)} size="sm">
        <div className="text-center">
          <p className="text-sm text-text-primary mb-4">
            Вы уверены, что хотите удалить свою публикацию?
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setShowConfirm(false)}>
              Удалить
            </Button>
            <Button size="sm" onClick={() => { setShowConfirm(false); setShowSuccess(true); }}>
              Сохранить
            </Button>
          </div>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Публикация успешно удалена!"
      />
    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("profile");

  return (
    <div className="p-4 lg:p-6">
      {/* Tabs */}
      <div className="flex justify-center gap-4 lg:gap-6 border-b border-border-light mb-6 overflow-x-auto no-scrollbar">
        {profileTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "pb-3 text-sm whitespace-nowrap transition-colors relative",
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
      {activeTab === "profile" && <div className="flex justify-center"><ProfileContent /></div>}
      {activeTab === "publications" && <PublicationsTable />}
      {activeTab === "applications" && <OrdersTable type="applications" />}
      {activeTab === "orders" && <OrdersTable type="orders" />}
      {activeTab === "notifications" && (
        <div className="max-w-xl">
          <p className="text-sm text-text-secondary">Настройки уведомлений доступны в разделе профиля</p>
        </div>
      )}
    </div>
  );
}
