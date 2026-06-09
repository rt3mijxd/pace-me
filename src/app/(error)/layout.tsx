import Header from "@/components/layout/Header";

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <div className="sticky top-0 z-40 max-w-[1440px] mx-auto w-full px-2 lg:px-4">
        <div className="bg-white rounded-b-2xl shadow-card overflow-hidden">
          <Header />
        </div>
      </div>
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-2 lg:px-4 pt-3 pb-4">
        <div className="bg-white rounded-2xl shadow-card flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 flex flex-col">{children}</main>
          {/* Footer */}
          <footer className="px-6 py-4 text-[11px] text-text-tertiary leading-relaxed">
            <p>© Paceme.ru</p>
            <p>Любое использование контента без письменного разрешения Paceme.ru строго запрещено.</p>
            <p>Возрастное ограничение 16+</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
