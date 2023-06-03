import { getAllProducts } from "@/app/(server)/api/products/data";
import ListProducts from "../ListProducts/ListProducts";

const TopProducts = async () => {
  const allProducts = await getAllProducts();
  const products = allProducts.slice(0, 9);

  return <ListProducts products={products} />;
};

export default TopProducts;
