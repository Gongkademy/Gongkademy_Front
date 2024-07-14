import { Link } from "react-router-dom";
import Button from "../../../components/common/button/Button";
import PageLayout from "../../../components/common/page/PageLayout";
import { ADMIN_PATH } from "../../../router/Constants";
import AdminLectureItem from "../../../components/admin/lecture/AdminLectureItem";

const AdminLecturePage = () => {
  return (
    <>
      <Link to={ADMIN_PATH.LECTURE_REGIST}>
        <Button fill>강좌 등록</Button>
      </Link>
      <AdminLectureItem>재료역학</AdminLectureItem>
    </>
  );
};
export default AdminLecturePage;
