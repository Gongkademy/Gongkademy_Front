import { useQueries, useQuery } from "@tanstack/react-query";
import { END_POINT } from "../apiConstants";
import { axiosInstance } from "../axiosInstance";

export const getAllCourses = async () => {
  return await axiosInstance.get(END_POINT.COURSE);
};

export const getAllCourseContents = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_LIST(courseId));
};

export const useLectureListQuery = (courseId) =>
  useQuery({
    queryKey: ["lectureList", courseId],
    queryFn: () => axiosInstance.get(END_POINT.COURSE_LIST(courseId)),
  });

export const registCourse = async (courseId) => {
  return await axiosInstance.post(END_POINT.COURSE_REGIST(courseId));
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

export const getCourseNoticePerPage = async (courseId, page) => {
  return await axiosInstance.get(END_POINT.COURSE_NOTICE_DETAIL(courseId), {
    params: { page: page },
  });
};

export const getRegistCoursesNoComplete = async () => {
  return await axiosInstance.get(END_POINT.COURSE_NO_COMPLETE);
};

export const getRegistCoursesComplete = async () => {
  return await axiosInstance.get(END_POINT.COURSE_COMPLETE);
};

export const postLikeCourse = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_LIKE, data);
};

export const getCourseInfo = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_INFO(courseId));
};

export const getLecture = async (params) => {
  return await axiosInstance.get(END_POINT.COURSE_LECTURE, { params: params });
};
