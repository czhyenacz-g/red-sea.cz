export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">Oficiální distribuce pro ČR</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-white">Red Sea CZ</h1>
        <p className="text-gray-500 text-sm mb-8">Distribuce produktů <a href="https://redseafish.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">redseafish.com</a> na českém trhu</p>
        <p className="text-gray-300 text-lg mb-8">
          Profesionální akvarijní technika Red Sea Fish pro obchody, akvaristická studia a velkoobchodní odběratele.
        </p>
        <div className="border border-gray-700 rounded-xl p-6 mb-8 text-left space-y-3">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">B2B spolupráce</p>
          <p className="text-gray-300">Ceník a podmínky velkoobchodního odběru na vyžádání.</p>
          <a
            href="mailto:info@red-sea.cz"
            className="inline-block mt-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            info@red-sea.cz
          </a>
        </div>
        <p className="text-xs text-gray-600">red-sea.cz</p>
      </div>
    </main>
  );
}
