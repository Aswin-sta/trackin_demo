import { useMsal } from "@azure/msal-react";
import axios from "axios";
import React, { useContext } from "react";
import { loginRequest } from "../../auth/authConfig";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "./LoginPage";

const LoginPageHandler = ({ isLoading }: { isLoading: boolean }) => {
  const { instance } = useMsal();
  const { setAuthState } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const data = await instance.loginPopup(loginRequest);
      console.log(data);

      const response = await axios.get("http://localhost:8080/auth", {
        headers: {
          Authorization: `Bearer ${data.idToken}`,
          ProxyAuthorization: `Bearer ${data.accessToken}`,
        },
      });
      setAuthState({
        isAuthenticated: true,
        userRole: response.data.data.user_role,
        userName: response.data.data.user_name,
      });
      localStorage.setItem("accessToken", response.data.data.token);
      console.log("Authentication successful:", response.data.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <LoginPage isLoading={isLoading} handleLogin={handleLogin} />;
};

export default LoginPageHandler;
