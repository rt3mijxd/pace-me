"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";

export default function NewPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="p-6 lg:p-10">
      <div className="max-w-[420px] mx-auto">
        <h1 className="text-center text-lg text-text-tertiary mb-8">
          Восстановление пароля
        </h1>

        <div className="space-y-5">
          <Input
            label="Введите новый пароль"
            placeholder="Придумайте пароль"
            type="password"
          />
          <Input
            label="Повторите новый пароль"
            placeholder="Повторите новый пароль"
            type="password"
          />

          <div className="flex justify-center pt-2">
            <Button size="lg" className="min-w-[200px]" onClick={() => setShowSuccess(true)}>
              Сохранить пароль
            </Button>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Пароль успешно изменён и сохранён"
      />
    </div>
  );
}
