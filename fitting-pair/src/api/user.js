import { axiosInstance } from "./axiosInstance";

const signup = async ({ userName, phoneNumber, userHeight, userGender }) => {
  try {
    const res = await axiosInstance.post("/auth/signup", { userName, phoneNumber, userHeight, userGender });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const login = async ({ phoneNumber }) => {
  try {
    const res = await axiosInstance.post("/auth/login", { phoneNumber });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { signup, login };
