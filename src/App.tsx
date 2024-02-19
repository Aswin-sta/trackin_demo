import "./App.css";
import AuthenticationGateway from "./auth/AuthenticationGateway";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AuthenticationGateway />
    </AuthContextProvider>
  );
}

export default App;
