import React, { useContext } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import RoutesComponent from "../routes/RoutesComponent";
import { AuthContext } from "../components/context/AuthContext";
import LoginPageHandler from "../components/login/LoginPageHandler";

const AuthenticationGateway = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div>
      <AuthenticatedTemplate>
        {authState.isAuthenticated ? (
          <RoutesComponent />
        ) : (
          <LoginPageHandler isLoading={true} />
        )}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <LoginPageHandler isLoading={false} />
      </UnauthenticatedTemplate>
    </div>
  );
};

export default AuthenticationGateway;
