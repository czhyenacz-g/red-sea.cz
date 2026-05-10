import { Header } from "../components/Header";
import { CategoryLanding } from "../components/CategoryLanding";
import { PRODUCT_CATEGORIES } from "../data/productCategories";

export default function Page() {
  const category = PRODUCT_CATEGORIES.find((item) => item.slug === "salt");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {category ? (
        <CategoryLanding category={category} intro={category.summary} highlights={["Red Sea salt", "Coral Pro Salt", "7 kg / 22 kg / 20,1 kg / 25 kg"]} />
      ) : null}
    </div>
  );
}
