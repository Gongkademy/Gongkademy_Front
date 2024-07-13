import { Link } from "react-router-dom";
import Button from "../../../components/common/button/Button";
import PageLayout from "../../../components/common/page/PageLayout";
import { ADMIN_PATH } from "../../../router/Constants";

const AdminLecturePage = () => {
  return (
    <PageLayout>
      <Link to={ADMIN_PATH.LECTURE_REGIST}>
        <Button fill>강좌 등록</Button>
      </Link>
    </PageLayout>
  );
};
export default AdminLecturePage;
