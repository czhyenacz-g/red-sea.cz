import { AquariumsPageContent } from "./components/AquariumsPageContent";
import { HomeIntroOverlay } from "./components/HomeIntroOverlay";

export default function Home() {
  return (
    <HomeIntroOverlay>
      <AquariumsPageContent />
    </HomeIntroOverlay>
  );
}
