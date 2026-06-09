"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";

export default function RoutePage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const [surface, setSurface] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = "Обязательное поле";
    if (!city.trim()) errs.city = "Обязательное поле";
    if (!distance.trim()) errs.distance = "Обязательное поле";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setShowSuccess(true);
    }
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-xl font-semibold text-text-primary mb-2">
        Рассказать о маршруте
      </h1>
      <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-xl">
        Здесь бегуны делятся своими проверенными маршрутами — по паркам,
        набережным, лесным тропам и городским улицам. Опишите свой любимый
        маршрут для тренировок в вашем городе и добавьте свои полезные
        советы, чтобы вдохновить других и получить бонусы от партнёров!
      </p>

      <div className="max-w-xl space-y-5">
        <Input
          label="Заголовок *"
          placeholder="Например: 10 км в Сокольники через Лосиный..."
          value={title}
          onChange={(e) => { setTitle(e.target.value); clearError("title"); }}
          error={errors.title}
        />
        <Input
          label="Город *"
          placeholder="Москва"
          value={city}
          onChange={(e) => { setCity(e.target.value); clearError("city"); }}
          error={errors.city}
        />
        <Input
          label="Протяжённость маршрута в километрах *"
          placeholder="Укажите расстояние в километрах"
          value={distance}
          onChange={(e) => { setDistance(e.target.value); clearError("distance"); }}
          error={errors.distance}
        />
        <Input
          label="Покрытие"
          placeholder="Укажите покрытие"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
        />

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            Описание
          </label>
          <textarea
            placeholder="Расскажите про ваш маршрут подробнее: перепады высот, тип поверхности, наличие воды и т.д."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px] resize-none"
          />
        </div>

        <Input
          label="Ссылка на карту"
          placeholder="https://..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <Button onClick={handleSubmit}>
          Отправить модератору
        </Button>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Заявка успешно отправлена!"
        description="Информация о забеге передана в работу нашим модераторам"
      />
    </div>
  );
}
