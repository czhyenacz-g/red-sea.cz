import { Header } from "./Header";
import { AquariumCatalogClient } from "./AquariumCatalogClient";
import { ReeferG3MaxGallery } from "./ReeferG3MaxGallery";

export function AquariumsPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <AquariumCatalogClient />
          <ReeferG3MaxGallery />
        </div>
      </main>
    </div>
  );
}
