import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTION_HOST || "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});
