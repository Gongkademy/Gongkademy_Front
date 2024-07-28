import { Link } from "react-router-dom";
import Button from "../../../components/common/button/Button";
import { ADMIN_PATH } from "../../../router/Constants";
import AdminLectureItem from "../../../components/admin/lecture/AdminLectureItem";
import { getCourses } from "../../../apis/course/adminCourseApi";
import { useEffect } from "react";
import { useState } from "react";

const AdminCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <Link to={ADMIN_PATH.COURSE_REGIST}>
        <Button fill>강좌 등록</Button>
      </Link>
      {courses.map((course) => (
        <AdminLectureItem key={course.id} course={course} />
      ))}
    </>
  );
};
export default AdminCoursePage;
