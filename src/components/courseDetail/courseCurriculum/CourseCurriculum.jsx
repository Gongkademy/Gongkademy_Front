import { useParams } from "react-router-dom";
import { getAllCourseContents } from "../../../apis/course/courseApi";
import CurriculumItem from "./CurriculumItem";
import { useEffect, useState } from "react";

const CourseCurriculum = () => {
  const params = useParams();
  const [lectures, setLectures] = useState([]);
  const fetchLecture = async () => {
    try {
      const response = await getAllCourseContents(params.courseId);
      setLectures(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLecture();
  }, []);

  return (
    <div>
      {lectures.map((lecture) => (
        <CurriculumItem
          lecture={lecture}
          type={"user"}
          key={lecture.lectureId}
        />
      ))}
    </div>
  );
};

export default CourseCurriculum;
