import AdBanner from "@/components/ui/AdBanner";

export default function AdSidebar() {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 py-4 px-4 space-y-4 overflow-hidden sticky top-[112px] self-start max-h-[calc(100vh-124px)]">
      <AdBanner size="rectangle" label="Adidas" className="max-w-full" />
      <AdBanner size="rectangle" label="Adidas" className="max-w-full" />
    </aside>
  );
}
