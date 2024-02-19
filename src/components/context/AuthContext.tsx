import { createContext, ReactNode, useState, useEffect } from "react";

type AuthState = {
  isAuthenticated: boolean;
  userRole: string | null;
  userName: string | null;
};

type AuthContextType = {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
};

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
