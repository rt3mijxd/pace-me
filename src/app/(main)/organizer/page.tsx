"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";
import { cn } from "@/lib/utils";

export default function OrganizerPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [eventType, setEventType] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [conditions, setConditions] = useState("");
  const [description, setDescription] = useState("");
  const [attachLink, setAttachLink] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const eventTypes = ["Шоссейный", "Кросс", "Горный", "Суточный"];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Обязательное поле";
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
        Рассказать о старте
      </h1>
      <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-xl">
        Проводишь любительский или авторский старт? Расскажи о нём на портале
        — добавь описание, маршрут и форму, чтобы участники могли вас найти и
        зарегистрироваться в пару кликов.
      </p>

      <div className="max-w-xl space-y-5">
        <Input
          label="Название забега *"
          placeholder="Например: Тольятти 10 км"
          value={name}
          onChange={(e) => { setName(e.target.value); clearError("name"); }}
          error={errors.name}
        />
        <Input
          label="Город проведения *"
          placeholder="Введите город"
          value={city}
          onChange={(e) => { setCity(e.target.value); clearError("city"); }}
          error={errors.city}
        />
        <Input
          label="Локация старта"
          placeholder="Введите локацию"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          label="Дистанция *"
          placeholder="1 км / 3 / 5 / 10 / 21 км"
          value={distance}
          onChange={(e) => { setDistance(e.target.value); clearError("distance"); }}
          error={errors.distance}
        />
        <Input
          label="Условия участия"
          placeholder="Платный / Бесплатный / Призовой фонд / Подарки для участников..."
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
        />

        {/* Event type */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Тип забега
          </label>
          <div className="flex gap-2 flex-wrap">
            {eventTypes.map((t) => (
              <button
                key={t}
                onClick={() => setEventType(t)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm border transition-colors",
                  eventType === t
                    ? "border-primary text-primary bg-primary-50"
                    : "border-border text-text-secondary hover:border-text-tertiary"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            Описание
          </label>
          <textarea
            placeholder="Расскажите про ваш забег подробнее: перепады высот, тип поверхности, наличие воды и т.д."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px] resize-none"
          />
        </div>

        <Input
          label="Ссылка на вложения"
          placeholder="Вставьте ссылку на диск (файлы, фото, логотипы и т.д.)"
          value={attachLink}
          onChange={(e) => setAttachLink(e.target.value)}
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
