"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-text-primary mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-body-md text-text-primary",
              "placeholder:text-text-tertiary",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              "transition-colors duration-150",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-secondary",
              icon && "pl-10",
              error && "border-error focus:ring-error",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-body-sm text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
