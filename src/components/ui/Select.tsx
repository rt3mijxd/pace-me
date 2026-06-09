"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectProps {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Выберите...",
  className,
}: SelectProps) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-body-sm font-medium text-text-primary mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full appearance-none rounded-lg border border-border bg-surface px-3 py-2.5 pr-10 text-body-md",
            "text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "transition-colors duration-150 cursor-pointer",
            !value && "text-text-tertiary"
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
      </div>
    </div>
  );
}
