import { axiosInstance } from "./axiosInstance";
import { API_PATH } from "../constants";

const postImg = async (imageFile) => {
  try {
    const res = await axiosInstance.post(`${API_PATH.UPLOAD_USER_IMAGE}`, imageFile);
    console.log(res);
  } catch (error) {
    console.error("Error uploading image:", error.response ? error.response.data : error.message);
    throw err;
  }
};

export { postImg };
