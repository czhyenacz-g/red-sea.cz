import Link from "next/link";
import type { ProductCategory } from "../data/productCategories";

type CategoryLandingProps = {
  category: ProductCategory;
  intro: string;
  highlights?: string[];
};

export function CategoryLanding({ category, intro, highlights }: CategoryLandingProps) {
  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#153156]">[placeholder]</p>
        <div className="mt-3 max-w-3xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{category.label}</h1>
          <p className="text-base leading-7 text-slate-600">{intro}</p>
        </div>

        {highlights?.length ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <Link href="/" className="text-sm font-medium text-[#153156] hover:underline">
            [placeholder]
          </Link>
        </div>
      </div>
    </main>
  );
}
