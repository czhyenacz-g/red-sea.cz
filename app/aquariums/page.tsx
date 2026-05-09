import { Header } from "../components/Header";
import { AquariumColorSwitcher } from "../components/AquariumColorSwitcher";
import { AQUARIUM_VARIANTS } from "../data/aquariumVariants";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <AquariumColorSwitcher
            eyebrow="Aquariums"
            heading="Cabinet color switcher"
            intro="Pick the cabinet finish to see the aquarium in the right visual context. White cabinets are presented on a dark stage; black cabinets switch to a light stage for maximum contrast."
            variants={AQUARIUM_VARIANTS}
          />
        </div>
      </main>
    </div>
  );
}
