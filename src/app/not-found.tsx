import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
        Упс...
      </h1>
      <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
        Ошибка 404
      </h2>

      {/* Runner illustration placeholder */}
      <div className="w-[220px] h-[180px] mx-auto mb-8 flex items-center justify-center">
        <svg viewBox="0 0 220 180" className="w-full h-full">
          <circle cx="140" cy="50" r="22" fill="#9CA3AF" opacity="0.6" />
          <path d="M90,80 Q110,55 135,75 Q160,95 140,125 Q115,150 90,130 Q65,110 90,80Z" fill="#D1D5DB" opacity="0.5" />
          <circle cx="60" cy="145" r="18" fill="none" stroke="#9CA3AF" strokeWidth="3" opacity="0.4" />
          <circle cx="175" cy="120" r="12" fill="none" stroke="#9CA3AF" strokeWidth="3" opacity="0.4" />
          <path d="M100,70 L140,90 L125,125 L85,140" stroke="#9CA3AF" strokeWidth="2.5" fill="none" opacity="0.6" />
          <rect x="150" y="95" width="20" height="25" rx="3" fill="#D1D5DB" opacity="0.4" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-4">
        Этой страницы здесь нет
      </h3>

      <p className="text-sm text-text-secondary max-w-sm mb-8 leading-relaxed">
        Мы всё обыскали, но ничего не нашли.<br />
        Возможно, ссылка устарела или была набрана с ошибкой.
      </p>

      <Link href="/">
        <Button size="lg">На главную</Button>
      </Link>
    </div>
  );
}
