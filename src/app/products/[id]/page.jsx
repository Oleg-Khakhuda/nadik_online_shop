import { getProductsByCategory } from "@/app/(server)/api/products/data";
import ListProducts from "@/components/ListProducts/ListProducts";

const PageProducts = async ({ params }) => {
  const products = await getProductsByCategory(params.id);
  return <ListProducts products={products} />;
};

export default PageProducts;
