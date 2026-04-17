import { Header } from "../components/Header";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl font-bold text-[#153156] mb-4">reef care products</h1>
        <p className="text-gray-400">Obsah připravujeme.</p>
      </main>
    </div>
  );
}
