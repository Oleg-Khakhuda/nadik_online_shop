import { getMainCategories } from "../../app/(server)/api/mainCategories/data";
import Image from "next/image";
import Link from "next/link";
import s from "./MainCategories.module.scss";

const MainCategories = async () => {
  const categories = await getMainCategories();
  return (
    <div>
      <ul className={s.category_list}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li className={s.category_item} key={category.id}>
              <Link
                rel="preload"
                className={s.category_link}
                href={`/categories/${category.id}`}
              >
                <Image
                  className={s.category_image}
                  src={category.image}
                  alt="category"
                  width={600}
                  height={450}
                  priority={true}
                />
                <h2 className={s.category_title}>{category.title}</h2>
              </Link>
            </li>
          ))
        ) : (
          <div>Щось пішло не так! Спробуйте перезавантажити сторінку.</div>
        )}
      </ul>
    </div>
  );
};

export default MainCategories;
