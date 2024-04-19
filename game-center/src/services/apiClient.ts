import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f091929ee9a94f37afb299ce7aea6abd",
  },
});
