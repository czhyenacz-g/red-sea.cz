import { Header } from "../components/Header";
import { CategoryLanding } from "../components/CategoryLanding";
import { PRODUCT_CATEGORIES } from "../data/productCategories";

export default function Page() {
  const category = PRODUCT_CATEGORIES.find((item) => item.slug === "supplements");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {category ? (
        <CategoryLanding
          category={category}
          intro="Doplňky a additive skupiny včetně 4-part Supplement a Starter pack reference."
          highlights={["4-part Supplement", "Starter pack", "Colors"]}
        />
      ) : null}
    </div>
  );
}
