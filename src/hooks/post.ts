import api from "../services/api";

export async function postNewBook(data: any) {
  const response = await api.post("/book", {
    title: data.title,
    isbn: data.isbn,
    cover_url: data.cover_url,
    publishing_date: data.publishing_date,
    author_id: "635fc1b405b763118dcdb8a4",
  });

  return response.data.data;
}

export async function postNewAuthor(data: any) {
  const response = await api.post("/author", {
    name: data.name,
    birth_date: data.birth_date,
  });

  return response.data.data;
}
