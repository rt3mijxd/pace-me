import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function EventsPage() {
  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-xl font-semibold text-text-primary mb-2">
        Российские и зарубежные старты
      </h1>
      <p className="text-sm text-text-secondary mb-6">
        Календарь беговых мероприятий в России и за рубежом
      </p>

      <div className="text-center py-16">
        <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarDaysIcon className="w-8 h-8 text-text-tertiary" />
        </div>
        <h3 className="text-base font-medium text-text-primary mb-2">
          Раздел в разработке
        </h3>
        <p className="text-sm text-text-secondary">
          Скоро здесь появится календарь беговых мероприятий
        </p>
      </div>
    </div>
  );
}
