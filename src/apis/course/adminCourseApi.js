import { END_POINT } from "../apiConstants";
import { adminInstance } from "../axiosInstance";

export const getCourses = async () => {
  return await adminInstance.get(END_POINT.COURSE);
};

export const getCourseDetail = async (courseId) => {
  return await adminInstance.get(END_POINT.COURSE_DETAIL(courseId));
};

export const createCourse = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("courseImg", data.courseImg);
  return await adminInstance.post(END_POINT.COURSE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateCourseInfo = async (courseId, data) => {
  return await adminInstance.patch(END_POINT.COURSE_INFO(courseId), data);
};

export const updateCourse = async (courseId, data) => {
  return await adminInstance.patch(END_POINT.COURSE_DETAIL(courseId), data);
};

export const updateCourseStatus = async (courseId) => {
  return await adminInstance.patch(END_POINT.COURSE_STATUS(courseId));
};

export const createCourseNotice = async (data) => {
  return await adminInstance.post(END_POINT.COURSE_NOTICE, data);
};

export const updateCourseNotice = async (courseId, data) => {
  console.log(data);
  return await adminInstance.patch(
    END_POINT.COURSE_NOTICE_DETAIL(courseId),
    data
  );
};

export const deleteCourseNotice = async (courseId) => {
  return await adminInstance.delete(END_POINT.COURSE_NOTICE_DETAIL(courseId));
};

export const createLecture = async (data) => {
  return await adminInstance.post(END_POINT.LECTURE, data);
};

export const updateLecture = async (lectureId, data) => {
  return await adminInstance.patch(END_POINT.LECTURE_DETAIL(lectureId), data);
};

export const deleteLecture = async (lectureId) => {
  return await adminInstance.delete(END_POINT.LECTURE_DETAIL(lectureId));
};
