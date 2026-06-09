import Link from "next/link";
import Button from "./Button";

interface ErrorPageProps {
  code: number;
  title: string;
  description: string;
  action?: string;
}

export default function ErrorPage({ code, title, description, action }: ErrorPageProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
        Упс... Ошибка {code}
      </h1>

      {/* Illustration placeholder */}
      <div className="w-[200px] h-[160px] mx-auto mb-6 flex items-center justify-center">
        <svg viewBox="0 0 200 160" className="w-full h-full text-gray-300">
          {/* Runner illustration placeholder */}
          <circle cx="120" cy="40" r="20" fill="currentColor" opacity="0.6" />
          <path d="M80,80 Q100,60 120,80 Q140,100 120,120 Q100,140 80,120 Q60,100 80,80Z" fill="currentColor" opacity="0.3" />
          <circle cx="60" cy="130" r="15" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
          <circle cx="160" cy="110" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
          <path d="M90,70 L130,90 L110,120 L80,130" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      </div>

      <h2 className="text-lg lg:text-xl font-semibold text-text-primary mb-4">
        {title}
      </h2>

      <p className="text-sm lg:text-base text-text-secondary max-w-md mb-8 whitespace-pre-line leading-relaxed">
        {description}
      </p>

      {action && (
        <Link href="/">
          <Button size="lg">{action}</Button>
        </Link>
      )}
    </div>
  );
}
