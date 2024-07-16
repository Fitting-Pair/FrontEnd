import { axiosInstance } from "./axiosInstance";

const signup = async ({ userName, phoneNumber, userHeight, userGender }) => {
  try {
    const res = await axiosInstance.post("/auth/signup", { userName, phoneNumber, userHeight, userGender });
    return res;
  } catch (err) {
    throw err;
  }
};

const login = async ({ phoneNumber }) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", { phoneNumber });
    return data;
  } catch (err) {
    throw err;
  }
};

const logout = async () => {
  try {
    const { data } = await axiosInstance.post("/auth/logout");
    return data;
  } catch (err) {
    throw err;
  }
};

export { signup, login, logout };
