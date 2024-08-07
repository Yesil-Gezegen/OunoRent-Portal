import Routers from "./Routers";
import { DataProvider } from "./context/ApiContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { HeaderProvider } from "./context/HeaderContext.jsx";

function App() {
  return (
    <AuthProvider>
      <HeaderProvider>
        <DataProvider>
          <BlogProvider>
            {" "}
            <Routers />;
          </BlogProvider>
        </DataProvider>
      </HeaderProvider>
    </AuthProvider>
  );
}

export default App;
