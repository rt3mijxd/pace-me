"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Tab = "login" | "register";

export default function AuthPage() {
  const [tab, setTab] = useState<Tab>("login");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");

  // Form fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Validation errors
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});

  const validateLogin = () => {
    const errors: Record<string, string> = {};
    if (!loginEmail.trim()) errors.email = "Обязательное поле";
    if (!loginPassword.trim()) errors.password = "Обязательное поле";
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegister = () => {
    const errors: Record<string, string> = {};
    if (!regEmail.trim()) errors.email = "Обязательное поле";
    if (!regPassword.trim()) errors.password = "Обязательное поле";
    setRegErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateLogin()) {
      // Login logic
      alert("Вход выполнен!");
    }
  };

  const handleRegister = () => {
    if (validateRegister()) {
      // Register logic
      alert("Регистрация выполнена!");
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <div className="max-w-[420px] mx-auto">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() => setTab("login")}
            className={cn(
              "text-base pb-2 border-b-2 transition-colors",
              tab === "login"
                ? "text-primary border-primary font-medium"
                : "text-text-tertiary border-transparent hover:text-text-secondary"
            )}
          >
            Войти
          </button>
          <button
            onClick={() => setTab("register")}
            className={cn(
              "text-base pb-2 border-b-2 transition-colors",
              tab === "register"
                ? "text-primary border-primary font-medium"
                : "text-text-tertiary border-transparent hover:text-text-secondary"
            )}
          >
            Зарегистрироваться
          </button>
        </div>

        {tab === "login" && (
          <div className="space-y-5">
            <Input
              label="Электронная почта"
              placeholder="Введите адрес электронной почты"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
                if (loginErrors.email) setLoginErrors((prev) => ({ ...prev, email: "" }));
              }}
              error={loginErrors.email}
            />
            <div>
              <Input
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                  if (loginErrors.password) setLoginErrors((prev) => ({ ...prev, password: "" }));
                }}
                error={loginErrors.password}
              />
              <Link href="/auth/forgot-password" className="mt-2 inline-block text-sm text-text-tertiary hover:text-primary transition-colors">
                Забыли пароль?
              </Link>
            </div>
            <div className="pt-2 flex justify-center">
              <Button size="lg" className="min-w-[160px]" onClick={handleLogin}>
                Войти
              </Button>
            </div>
          </div>
        )}

        {tab === "register" && (
          <div className="space-y-5">
            <Input
              label="Электронная почта *"
              placeholder="Заполните поле"
              value={regEmail}
              onChange={(e) => {
                setRegEmail(e.target.value);
                if (regErrors.email) setRegErrors((prev) => ({ ...prev, email: "" }));
              }}
              error={regErrors.email}
            />
            <Input
              label="Пароль *"
              placeholder="Введите пароль"
              type="password"
              value={regPassword}
              onChange={(e) => {
                setRegPassword(e.target.value);
                if (regErrors.password) setRegErrors((prev) => ({ ...prev, password: "" }));
              }}
              error={regErrors.password}
            />

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Пол
              </label>
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

            <Input
              label="Номер телефона"
              placeholder="Введите в формате +7xxxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* Level */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Уровень подготовки
              </label>
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

            {/* About */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                О себе
              </label>
              <textarea
                placeholder="Опишите ваши интересы"
                className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-h-[100px] resize-none"
              />
            </div>

            <div className="pt-2 flex justify-center">
              <Button size="lg" className="min-w-[200px]" onClick={handleRegister}>
                Зарегистрироваться
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
