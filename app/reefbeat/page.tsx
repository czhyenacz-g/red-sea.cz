import { Header } from "../components/Header";
import { CategoryLanding } from "../components/CategoryLanding";
import { PRODUCT_CATEGORIES } from "../data/productCategories";

export default function Page() {
  const category = PRODUCT_CATEGORIES.find((item) => item.slug === "reefbeat");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {category ? (
        <CategoryLanding category={category} intro="ReefBeat ekosystém a chytrá zařízení pro vzdálené ovládání a monitoring." highlights={["ReefBeat ecosystem", "remote control", "smart devices"]} />
      ) : null}
    </div>
  );
}
