import { CourseDetailTopBlock } from "./CourseDetailTop.style";
import CourseSummary from "../courseSummary/CourseSummary";
import { getCourseDetail } from "../../../apis/course/courseApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CourseThumbnailBlock,
  CourseThumbnail,
} from "../courseSummary/CourseSummary.style";
const CourseDetailTop = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const fetchCourseDetail = async () => {
    try {
      const response = await getCourseDetail(courseId);
      console.log(response);
      setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);
  return (
    <CourseDetailTopBlock>
      <CourseThumbnailBlock>
        <CourseThumbnail src={course.courseImgAddress} alt="강좌 대표이미지" />
      </CourseThumbnailBlock>
      <CourseSummary course={course} />
    </CourseDetailTopBlock>
  );
};

export default CourseDetailTop;
