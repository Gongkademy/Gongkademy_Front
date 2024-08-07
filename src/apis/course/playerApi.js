import { axiosInstance } from "@apis/axiosInstance";
import { END_POINT } from "../apiConstants";

export const getPlayerLatestCourse = async (courseId) => {
  return await axiosInstance.get(END_POINT.PLAYER_COURSE_DETAIL(courseId));
};

export const getPlayerLatestLecture = async (lectureId) => {
  return await axiosInstance.get(END_POINT.PLAYER_LECTURE_DETAIL(lectureId));
};

export const updatePlayerLatest = async (data) => {
  return await axiosInstance.patch(END_POINT.PLAYER, data);
};
