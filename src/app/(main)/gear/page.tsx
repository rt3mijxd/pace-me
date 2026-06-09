import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function GearPage() {
  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-xl font-semibold text-text-primary mb-2">
        Всё для бега
      </h1>
      <p className="text-sm text-text-secondary mb-6">
        Обзоры экипировки, кроссовок и аксессуаров для бегунов
      </p>

      <div className="text-center py-16">
        <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBagIcon className="w-8 h-8 text-text-tertiary" />
        </div>
        <h3 className="text-base font-medium text-text-primary mb-2">
          Раздел в разработке
        </h3>
        <p className="text-sm text-text-secondary">
          Скоро здесь появятся обзоры и рекомендации по беговой экипировке
        </p>
      </div>
    </div>
  );
}
