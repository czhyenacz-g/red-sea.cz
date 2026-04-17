import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-1 flex items-center justify-center px-6 py-20"
        style={{ background: "linear-gradient(160deg, #1a2332 0%, #0f1922 40%, #0a1018 100%)" }}
      >
        <div className="max-w-lg text-center">
          <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Oficiální distribuce pro ČR
          </p>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Red Sea Fish</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Velkoobchodní distribuce prémiové akvarijní techniky{" "}
            <a href="https://redseafish.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
              Red Sea Fish
            </a>{" "}
            pro český a slovenský trh.
          </p>
          <div className="rounded-2xl border border-white/10 p-8 mb-8 text-left" style={{ background: "rgba(255,255,255,0.04)" }}>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">B2B spolupráce</p>
            <p className="text-gray-300 mb-5">Ceník, podmínky velkoobchodního odběru a katalog produktů na vyžádání.</p>
            <a href="mailto:info@red-sea.cz" className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm tracking-wide">
              Kontaktovat →
            </a>
          </div>
          <p className="text-gray-700 text-xs">red-sea.cz</p>
        </div>
      </main>
    </div>
  );
}
