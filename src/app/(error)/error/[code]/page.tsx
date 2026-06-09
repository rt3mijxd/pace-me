import { errorPages } from "@/data/mock";

interface ErrorCodePageProps {
  params: Promise<{ code: string }>;
}

export default async function ErrorCodePage({ params }: ErrorCodePageProps) {
  const { code } = await params;
  const numCode = parseInt(code, 10);
  const errorData = errorPages.find((e) => e.code === numCode);

  const title = errorData?.title || `Упс... Ошибка ${code}`;
  const description = errorData?.description || "Что-то пошло не так. Попробуйте позже.";
  const action = errorData?.action || "Обновите, пожалуйста, страницу";

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
        {title}
      </h1>

      <p className="text-base lg:text-lg text-text-primary max-w-2xl mb-4 whitespace-pre-line leading-relaxed">
        {description}
      </p>

      <p className="text-base lg:text-lg text-text-primary mb-10">
        {action}
      </p>

      {/* Runner illustration — woman stretching with weights */}
      <div className="w-[200px] h-[180px] mx-auto flex items-center justify-center">
        <svg viewBox="0 0 200 180" className="w-full h-full" fill="none">
          {/* Head */}
          <circle cx="115" cy="30" r="16" fill="#4B5563" />
          {/* Hair/ponytail */}
          <path d="M108,22 Q105,10 118,12 Q128,14 130,26" fill="#374151" />
          <path d="M128,20 Q140,15 145,25" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          {/* Neck */}
          <line x1="115" y1="46" x2="112" y2="55" stroke="#6B7280" strokeWidth="2.5" />
          {/* Torso */}
          <path d="M112,55 Q108,75 100,95" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left arm - reaching down */}
          <path d="M110,60 Q95,65 82,72 Q72,78 65,85" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right arm - reaching back */}
          <path d="M114,62 Q130,68 140,72 Q150,76 158,82" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left leg */}
          <path d="M100,95 Q88,115 78,135 Q72,148 65,155" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right leg */}
          <path d="M102,92 Q115,112 128,128 Q138,138 148,145" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
          {/* Left weight plate */}
          <circle cx="55" cy="155" r="16" stroke="#9CA3AF" strokeWidth="2.5" />
          <circle cx="55" cy="155" r="9" stroke="#D1D5DB" strokeWidth="2" />
          {/* Right weight plate */}
          <circle cx="155" cy="148" r="12" stroke="#9CA3AF" strokeWidth="2.5" />
          <circle cx="155" cy="148" r="6" stroke="#D1D5DB" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

// Generate static pages for common error codes
export function generateStaticParams() {
  return [
    { code: "400" }, { code: "401" }, { code: "403" }, { code: "404" },
    { code: "405" }, { code: "408" }, { code: "409" }, { code: "410" },
    { code: "413" }, { code: "414" }, { code: "429" }, { code: "451" },
    { code: "500" }, { code: "502" }, { code: "503" }, { code: "504" },
    { code: "505" }, { code: "506" }, { code: "507" }, { code: "508" },
    { code: "509" }, { code: "510" }, { code: "511" }, { code: "512" },
    { code: "513" }, { code: "514" }, { code: "515" }, { code: "516" },
    { code: "517" }, { code: "518" }, { code: "519" }, { code: "520" },
  ];
}
