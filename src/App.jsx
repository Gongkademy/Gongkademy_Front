import PageLayout from "./components/common/page/PageLayout";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}

export default App;
