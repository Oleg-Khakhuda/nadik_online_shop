import React from "react";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div>
      {product ? (
        <div key={product.id}>
          <Image
            src={product.productImage[0]}
            alt="product"
            width={300}
            height={200}
            priority
          />
          <p>{product.name}</p>
          <p>Ціна - {product.price} грн.</p>
          <p>{product.status}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <div>Щось пішло не так, спробуйте ще!</div>
      )}
    </div>
  );
};

export default Product;
