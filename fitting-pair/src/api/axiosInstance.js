import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://175.113.68.69:10007",
});

export { axiosInstance };
