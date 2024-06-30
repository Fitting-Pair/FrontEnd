import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "경로나중에 수정",
});

export { axiosInstance };
