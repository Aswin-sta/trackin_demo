import { createContext, ReactNode, useState, useEffect } from "react";
import { AuthContextType, AuthState } from "./types";

const initialAuthState: AuthState = {
  isAuthenticated: false,
  userRole: null,
  userName: null,
};

const getInitialAuthState = (): AuthState => {
  const authStateString = localStorage.getItem("authState");
  return authStateString ? JSON.parse(authStateString) : initialAuthState;
};

const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  setAuthState: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(getInitialAuthState);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
