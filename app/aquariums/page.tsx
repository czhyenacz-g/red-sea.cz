import { Header } from "../components/Header";
import { AquariumCatalogClient } from "../components/AquariumCatalogClient";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl space-y-8">
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Aquariums</p>
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Data-driven aquarium catalog</h1>
              <p className="text-base leading-7 text-slate-300 sm:text-lg">
                Select a product from the catalog, then switch between white and black cabinets. Products without ready assets show a graceful placeholder instead of broken imagery.
              </p>
            </div>
          </section>
          <AquariumCatalogClient />
        </div>
      </main>
    </div>
  );
}
