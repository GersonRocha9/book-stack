import api from "../services/api";

export async function deleteBook(id: string) {
  const response = await api.delete(`/book/${id}`);

  return response.data.data;
}

export async function deleteAuthor(id: string) {
  const response = await api.delete(`/author/${id}`);

  return response.data.data;
}
