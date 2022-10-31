import axios from "axios";

const api = axios.create({
  baseURL: "https://lazy-gold-pigeon-coat.cyclic.app",

  auth: {
    username: "prod",
    password: "pO655d&E8i",
  },
});

export default api;
