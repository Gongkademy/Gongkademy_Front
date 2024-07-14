import { END_POINT } from "../apiConstants";

export const createReview = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_REVIEW, data);
};

export const updateReview = async (reviewId, data) => {
  return await axiosInstance.patch(
    END_POINT.COURSE_REVIEW_DETAIL(reviewId),
    data
  );
};

export const getAllReviews = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_REVIEW_DETAIL(courseId));
};

export const deleteReview = async (reviewId) => {
  return await axiosInstance.delete(END_POINT.COURSE_REVIEW_DETAIL(reviewId));
};
