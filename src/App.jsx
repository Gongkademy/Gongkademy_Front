import PageLayout from "./components/common/page/PageLayout";
import Header from "./components/header/Header";
import { LoginProvider } from "./contexts/LoginContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <Header />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </LoginProvider>
  );
}

export default App;
