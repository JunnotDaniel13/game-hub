import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f9798b77d5146d493444d67d4652af5",
  },
});
