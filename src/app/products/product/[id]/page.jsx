import { getProductById } from "@/app/(server)/api/products/data";
import Product from "@/components/Product/Product";

const PageProduct = async ({ params }) => {
  const product = await getProductById(params.id);

  return <Product product={product} />;
};

export default PageProduct;
