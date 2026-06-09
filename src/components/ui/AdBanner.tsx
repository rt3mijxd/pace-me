import { cn } from "@/lib/utils";

interface AdBannerProps {
  size: "leaderboard" | "rectangle" | "skyscraper" | "mobile-banner";
  className?: string;
  label?: string;
}

const sizeMap = {
  leaderboard: { width: 728, height: 90, className: "w-full max-w-[728px] h-[90px]" },
  rectangle: { width: 300, height: 250, className: "w-[300px] h-[250px]" },
  skyscraper: { width: 160, height: 600, className: "w-[160px] h-[600px]" },
  "mobile-banner": { width: 320, height: 100, className: "w-full max-w-[320px] h-[100px]" },
};

export default function AdBanner({
  size,
  className,
  label,
}: AdBannerProps) {
  const config = sizeMap[size];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg overflow-hidden bg-gray-800",
        config.className,
        className
      )}
      data-ad-size={`${config.width}x${config.height}`}
      data-ad-slot="yandex-direct"
    >
      {/* Simulated ad content */}
      <div className="flex items-center gap-4 px-4">
        {label && (
          <>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">{label.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className="text-white">
              <div className="text-sm font-bold uppercase tracking-wide">
                ELEVATE YOUR TENNIS
              </div>
              <div className="text-sm font-bold uppercase tracking-wide">
                GAME TODAY
              </div>
            </div>
            <div className="text-[10px] text-white/60 max-w-[120px] leading-tight hidden sm:block">
              SMASH THE COMPETITION WITH 30% DISCOUNT
            </div>
            <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded hidden sm:block">
              DOWNLOAD APP
            </div>
          </>
        )}
        {!label && (
          <div className="text-center">
            <div className="text-xs text-white/40 font-medium">
              Реклама
            </div>
            <div className="text-[10px] text-white/30 mt-0.5">
              {config.width} × {config.height}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
