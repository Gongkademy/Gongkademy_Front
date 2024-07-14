import { END_POINT } from "../apiConstants";

export const createComment = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_COMMNET, data);
};

export const updateComment = async (courseId, data) => {
  return await axiosInstance.patch(
    END_POINT.COURSE_COMMNET_DETAIL(courseId),
    data
  );
};

export const getAllComments = async (category, courseId) => {
  return await axiosInstance.post(
    END_POINT.COURSE_COMMNET_CATEG_DETAIL(category, courseId),
    data
  );
};

export const deleteComment = async (reviewId) => {
  return await axiosInstance.delete(
    END_POINT.COURSE_COMMNET_DETAIL(reviewId),
    data
  );
};
