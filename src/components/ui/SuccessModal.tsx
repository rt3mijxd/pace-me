"use client";

import { useEffect, useCallback } from "react";
import Button from "./Button";
import { CheckIcon } from "@heroicons/react/24/outline";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  description,
}: SuccessModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEsc]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-modal p-8 max-w-sm w-full text-center animate-slide-in">
        {/* Green check circle */}
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
        </div>
        <h3 className="text-base font-semibold text-text-primary mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            {description}
          </p>
        )}
        <Button size="sm" onClick={onClose} className="min-w-[100px]">
          Закрыть
        </Button>
      </div>
    </div>
  );
}
