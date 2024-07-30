import Routers from "./Routers";
import { AuthProvider } from "./context/AuthContext.jsx";
import { HeaderProvider } from "./context/HeaderContex.jsx";

function App() {
  return (
    <AuthProvider>
      <HeaderProvider>
        {" "}
        <Routers />;
      </HeaderProvider>
    </AuthProvider>
  );
}

export default App;
