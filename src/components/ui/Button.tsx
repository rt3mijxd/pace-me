"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-700 shadow-sm",
  secondary:
    "bg-primary-50 text-primary hover:bg-primary-100 active:bg-primary-100",
  outline:
    "border border-border text-text-primary hover:bg-surface-secondary active:bg-surface-tertiary",
  ghost:
    "text-text-secondary hover:bg-surface-secondary active:bg-surface-tertiary",
  danger: "bg-error text-white hover:opacity-90 active:opacity-80",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-body-sm gap-1.5",
  md: "px-4 py-2 text-body-md gap-2",
  lg: "px-6 py-3 text-body-lg gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
