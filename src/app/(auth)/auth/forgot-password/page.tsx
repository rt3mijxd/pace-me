"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SuccessModal from "@/components/ui/SuccessModal";

export default function ForgotPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="p-6 lg:p-10">
      <div className="max-w-[420px] mx-auto">
        <h1 className="text-center text-lg text-text-tertiary mb-8">
          Восстановление пароля
        </h1>

        <div className="space-y-5">
          <Input
            label="Электронная почта"
            placeholder="Введите адрес электронной почты"
          />

          <div className="flex justify-center pt-2">
            <Button size="lg" className="min-w-[200px]" onClick={() => setShowSuccess(true)}>
              Восстановить пароль
            </Button>
          </div>

          <div className="flex justify-center">
            <Link href="/auth">
              <Button variant="outline" size="lg" className="min-w-[120px]">
                Назад
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="На указанную почту была направлена ссылка на восстановаление пароля"
      />
    </div>
  );
}
