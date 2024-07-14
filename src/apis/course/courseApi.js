import { END_POINT } from "../apiConstants";
import { axiosInstance } from "../axiosInstance";

export const getAllCourses = async () => {
  return await axiosInstance.get(END_POINT.COURSE);
};

export const getAllCourseContents = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_LIST(courseId));
};

export const registCourse = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_REGIST, data);
};

export const scrapCourse = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_SCRAP, data);
};

export const deleteRegistCourse = async (courseId) => {
  return await axiosInstance.delete(END_POINT.COURSE_DETAIL(courseId));
};

export const downloadCourseNote = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_DOWNLOAD, data);
};

export const getCourseDetail = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_DETAIL(courseId));
};

export const getCourseNoticePerPage = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_NOTICE_DETAIL(courseId));
};

export const getRegistCoursesNoComplete = async () => {
  return await axiosInstance.get(END_POINT.COURSE_NO_COMPLETE);
};

export const getRegistCoursesComplete = async () => {
  return await axiosInstance.get(END_POINT.COURSE_COMPLETE);
};

export const likeCourse = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_LIKE, data);
};

export const getCourseInfo = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_INFO(courseId));
};
