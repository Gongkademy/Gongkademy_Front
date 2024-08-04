import PageLayout from "./components/common/page/PageLayout";
import Header from "./components/header/Header";
import { LoginProvider } from "./contexts/LoginContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <Header />
      <p>CI/CD Test</p>
      <p>CI/CD Test</p>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </LoginProvider>
  );
}

export default App;
