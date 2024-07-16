import { axiosInstance } from "./axiosInstance";

const postImg = async (imageFile) => {
  try {
    const res = await axiosInstance.post("/usersimg/upload", imageFile);
    console.log(res);
  } catch (error) {
    console.error("Error uploading image:", error.response ? error.response.data : error.message);
  }
};

export { postImg };
