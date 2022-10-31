import api from "../services/api";

export async function getBooks() {
  const response = await api.get("/book");
  return response.data.data;
}

export async function getAuthors() {
  const response = await api.get("/author");
  return response.data.data;
}
