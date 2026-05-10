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
          intro={category.summary}
          highlights={["Complete 4-part Supplement Program", "Complete 7-part Supplement Program", "Starter pack", "Colors starter pack", "Skeletal elements"]}
        />
      ) : null}
    </div>
  );
}
