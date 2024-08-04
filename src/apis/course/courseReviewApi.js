import { END_POINT } from "../apiConstants";

export const getAllCourseReviews = async (courseId) => {
  return await axiosInstance.get(END_POINT.COURSE_REVIEW_DETAIL(courseId));
};

export const postCourseReview = async (data) => {
  return await axiosInstance.post(END_POINT.COURSE_REVIEW, data);
};

export const patchCourseReview = async (reviewId, data) => {
  return await axiosInstance.patch(
    END_POINT.COURSE_REVIEW_DETAIL(reviewId),
    data
  );
};

export const deleteCourseReview = async (reviewId) => {
  return await axiosInstance.delete(END_POINT.COURSE_REVIEW_DETAIL(reviewId));
};
