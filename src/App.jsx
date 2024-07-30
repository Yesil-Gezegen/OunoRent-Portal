import Routers from "./Routers";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      {" "}
      <Routers />;
    </AuthProvider>
  );
}

export default App;
