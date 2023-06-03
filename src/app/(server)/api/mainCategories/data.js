import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export async function getMainCategories() {
  const { data } = await axios.get("/api/maincategories");
  return data;
}
