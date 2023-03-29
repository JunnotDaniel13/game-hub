import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4440825d309f4a52a2be9702cea27ea5",
  },
});
