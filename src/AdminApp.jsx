import PageLayout from "@components/common/page/PageLayout";
import AdminHeader from "@components/admin/header/AdminHeader";
import { Outlet } from "react-router-dom";

function AdminApp() {
  return (
    <>
      <AdminHeader />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}

export default AdminApp;
