import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  onClick,
}: CardProps) {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      className={cn(
        "bg-surface rounded-xl shadow-card border border-border-light",
        paddingClasses[padding],
        hover &&
          "hover:shadow-dropdown hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
        onClick && "text-left w-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
