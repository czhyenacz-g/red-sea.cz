import { Header } from "./Header";
import { AquariumCatalogClient } from "./AquariumCatalogClient";
import { AquariumReferenceGallery } from "./AquariumReferenceGallery";
import { REEFER_G3_MAX_GALLERY } from "../data/reeferG3MaxGallery";
import { REEFER_G3_GALLERY } from "../data/reeferG3Gallery";

export function AquariumsPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <AquariumCatalogClient />
          <AquariumReferenceGallery title="REEFER G3 MAX — referenční galerie" groups={REEFER_G3_MAX_GALLERY} />
          <AquariumReferenceGallery title="REEFER G3 — referenční galerie" groups={REEFER_G3_GALLERY} />
        </div>
      </main>
    </div>
  );
}
