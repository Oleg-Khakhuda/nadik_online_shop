import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export async function getCategoriesByMainCategories(id) {
  const { data } = await axios.get(`/api/categories/${id}`);
  return data.result.items;
}
