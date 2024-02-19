export type AuthState = {
  isAuthenticated: boolean;
  userRole: string | null;
  userName: string | null;
};

export type AuthContextType = {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
};
