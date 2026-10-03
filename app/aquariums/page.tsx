import { AquariumsPageContent } from "../components/AquariumsPageContent";

export default async function Page({ searchParams }: { searchParams: Promise<{ internal?: string }> }) {
  const { internal } = await searchParams;
  return <AquariumsPageContent showInternal={internal === "1"} />;
}
