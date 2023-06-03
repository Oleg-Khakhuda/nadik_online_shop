import Image from "next/image";
import Link from "next/link";

const ListProducts = ({ products }) => {
  return (
    <div>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/product/${product.id}`}>
                <Image
                  src={product.productImage[0]}
                  alt="product"
                  width={300}
                  height={200}
                  priority
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.status}</p>
              </Link>
            </li>
          ))
        ) : (
          <div>
            Покищо товарів в цій категорії немає! Додамо найближчим часом
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListProducts;
