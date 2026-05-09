import { Header } from "../components/Header";
import { AquariumCatalogClient } from "../components/AquariumCatalogClient";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <AquariumCatalogClient />
        </div>
      </main>
    </div>
  );
}
