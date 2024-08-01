import Routers from "./Routers";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { HeaderProvider } from "./context/HeaderContex.jsx";

function App() {
  return (
    <AuthProvider>
      <HeaderProvider>
        <BlogProvider>
          {" "}
          <Routers />;
        </BlogProvider>
      </HeaderProvider>
    </AuthProvider>
  );
}

export default App;
