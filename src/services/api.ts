import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    // apiKey: 'some-api-key'
  },
});

export default api;
