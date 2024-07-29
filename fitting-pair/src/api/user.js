import { axiosInstance } from "./axiosInstance";
import { API_PATH } from "../constants";
import { setRefresh } from "../util";

const signup = async ({ userName, phoneNumber, userHeight, userGender }) => {
  try {
    const res = await axiosInstance.post(`${API_PATH.AUTH}/${API_PATH.SIGN_UP}`, {
      userName,
      phoneNumber,
      userHeight,
      userGender,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const login = async ({ phoneNumber }) => {
  try {
    const { data } = await axiosInstance.post(`${API_PATH.AUTH}/${API_PATH.LOGIN}`, { phoneNumber });
    return data;
  } catch (err) {
    throw err;
  }
};

const logout = async () => {
  try {
    setRefresh("Refresh", localStorage.getItem("refreshToken"));
    const { data } = await axiosInstance.post(`${API_PATH.AUTH}/${API_PATH.LOGOUT}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export { signup, login, logout };
