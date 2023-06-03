import Image from "next/image";
import Link from "next/link";

const ListCategories = ({ categories }) => {
  return (
    <div>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id}>
              <Link href={`/products/${category.id}`}>
                <Image
                  src={category.image}
                  alt="category"
                  width={150}
                  height={150}
                  priority
                />
                <p>{category.title}</p>
              </Link>
            </li>
          ))
        ) : (
          <div>Категорії не знайдено</div>
        )}
      </ul>
    </div>
  );
};

export default ListCategories;
