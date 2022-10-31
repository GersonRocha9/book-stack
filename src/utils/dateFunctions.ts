export const convertDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
