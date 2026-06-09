import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  name: string;
  size?: AvatarSize;
  verified?: boolean;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-body-sm",
  md: "w-10 h-10 text-body-md",
  lg: "w-14 h-14 text-body-lg",
  xl: "w-20 h-20 text-heading-3",
};

const badgeSizeClasses: Record<AvatarSize, string> = {
  xs: "w-2.5 h-2.5 -bottom-0 -right-0",
  sm: "w-3 h-3 -bottom-0.5 -right-0.5",
  md: "w-3.5 h-3.5 -bottom-0.5 -right-0.5",
  lg: "w-4 h-4 bottom-0 right-0",
  xl: "w-5 h-5 bottom-0.5 right-0.5",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const colors = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-pink-500",
];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function Avatar({
  src,
  name,
  size = "md",
  verified = false,
  className,
}: AvatarProps) {
  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn(
            "rounded-full object-cover",
            sizeClasses[size]
          )}
        />
      ) : (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-semibold",
            sizeClasses[size],
            getColor(name)
          )}
        >
          {getInitials(name)}
        </div>
      )}
      {verified && (
        <span
          className={cn(
            "absolute rounded-full bg-primary flex items-center justify-center",
            badgeSizeClasses[size]
          )}
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="w-2/3 h-2/3"
          >
            <path
              d="M9.5 3.5L5 8.5L2.5 6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
}
