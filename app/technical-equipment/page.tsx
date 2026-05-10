import { Header } from "../components/Header";
import { CategoryLanding } from "../components/CategoryLanding";
import { PRODUCT_CATEGORIES } from "../data/productCategories";

export default function Page() {
  const category = PRODUCT_CATEGORIES.find((item) => item.slug === "technical-equipment");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {category ? (
        <CategoryLanding
          category={category}
          intro="Technické vybavení pro cirkulaci, filtraci a údržbu systému."
          highlights={["Skimmers", "Pumps", "Wave"]}
        />
      ) : null}
    </div>
  );
}
