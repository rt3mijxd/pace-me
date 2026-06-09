import { HeartIcon } from "@heroicons/react/24/outline";

export default function HealthPage() {
  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-xl font-semibold text-text-primary mb-2">
        Здоровье бегуна
      </h1>
      <p className="text-sm text-text-secondary mb-6">
        Советы по здоровью, восстановлению и профилактике травм
      </p>

      <div className="text-center py-16">
        <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <HeartIcon className="w-8 h-8 text-text-tertiary" />
        </div>
        <h3 className="text-base font-medium text-text-primary mb-2">
          Раздел в разработке
        </h3>
        <p className="text-sm text-text-secondary">
          Скоро здесь появятся материалы о здоровье бегунов
        </p>
      </div>
    </div>
  );
}
