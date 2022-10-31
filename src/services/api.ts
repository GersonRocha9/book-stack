import axios from "axios";

const api = axios.create({
  baseURL: "https://lazy-gold-pigeon-coat.cyclic.app",
});

export default api;
