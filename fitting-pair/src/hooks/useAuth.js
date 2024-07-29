import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      nav("/");
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
