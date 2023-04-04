import axios from "axios";

export const api = axios.create({
  baseURL: "https://popcornpolls.onrender.com"
})