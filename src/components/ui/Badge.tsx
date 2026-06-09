import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface-tertiary text-text-secondary",
  primary: "bg-primary-50 text-primary",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700",
  outline: "border border-border text-text-secondary",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-body-sm font-medium whitespace-nowrap",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
