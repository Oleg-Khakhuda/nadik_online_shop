import { getCategoriesByMainCategories } from "../../(server)/api/categories/data";
import { getProductByMainCategory } from "@/app/(server)/api/products/data";

import ListProducts from "@/components/ListProducts/ListProducts";
import ListCategories from "@/components/ListCategories/ListCategories";

const PageCategories = async ({ params }) => {
  const categories = await getCategoriesByMainCategories(params.id);
  const products = await getProductByMainCategory(params.id);

  return (
    <>
      <ListCategories categories={categories} />
      <ListProducts products={products} />
    </>
  );
};

export default PageCategories;
