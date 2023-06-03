import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export async function getAllProducts() {
  const { data } = await axios.get("/api/products");
  return data.products.items;
}

export async function getProductsByCategory(id) {
  const { data } = await axios.get(`/api/products/category/${id}`);
  return data.products.items;
}

export async function getProductById(id) {
  const { data } = await axios.get(`/api/products/product/${id}`);
  return data;
}

export async function getProductByMainCategory(id) {
  const { data } = await axios.get(
    `/api/maincategories/maincategory/products/${id}`
  );
  return data.products;
}
