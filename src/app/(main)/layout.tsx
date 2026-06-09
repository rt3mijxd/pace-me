import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import AdSidebar from "@/components/layout/AdSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* Sticky header */}
      <div className="sticky top-0 z-40 max-w-[1440px] mx-auto w-full px-2 lg:px-4">
        <div className="bg-white rounded-b-2xl shadow-card overflow-hidden">
          <Header />
        </div>
      </div>
      {/* Content card */}
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-2 lg:px-4 pt-3 pb-4">
        <div className="bg-white rounded-2xl shadow-card flex min-h-0 flex-1">
          <SideNav />
          <main className="flex-1 min-w-0 border-x border-border-light overflow-x-hidden">
            {children}
          </main>
          <AdSidebar />
        </div>
      </div>
      {/* Legal footer */}
      <footer className="max-w-[1440px] mx-auto w-full px-4 lg:px-6 pb-4 text-center">
        <p className="text-[10px] text-text-tertiary leading-relaxed">
          © Paceme.ru · Любое использование контента без письменного разрешения строго запрещено. Возрастное ограничение 16+
        </p>
      </footer>
    </div>
  );
}
