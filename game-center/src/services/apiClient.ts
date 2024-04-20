import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cb4edff1e884668b18f890c14115dad",
  },
});
