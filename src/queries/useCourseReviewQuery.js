import {
  deleteCourseReview,
  getAllCourseReviews,
  patchCourseReview,
  postCourseReview,
} from "@apis/course/courseReviewApi";
import { queryClient } from "@queries/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCourseReviewQuery = (courseId) =>
  useQuery({
    queryKey: ["courseReview", courseId],
    queryFn: () => getAllCourseReviews(courseId),
  });

export const useRegistCourseReviewMutation = () =>
  useMutation({
    mutationFn: (data) => postCourseReview(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseReview"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });

export const useModifyCourseReviewMutation = () =>
  useMutation({
    mutationFn: ({ reviewId, data }) => patchCourseReview(reviewId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseReview"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
export const useRemoveCourseReview = () =>
  useMutation({
    mutationFn: (reviewId) => deleteCourseReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseReview"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
