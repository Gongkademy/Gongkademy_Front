import {
  createCourseNotice,
  deleteCourseNotice,
  updateCourseNotice,
} from "@apis/course/adminCourseApi";
import { getCourseInfo, getCourseNoticePerPage } from "@apis/course/courseApi";
import { queryClient } from "@apis/queries/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCourseIntroQuery = (courseId) =>
  useQuery({
    queryKey: ["courseIntro", courseId],
    queryFn: () => getCourseInfo(courseId),
  });

export const useCourseNoticeQuery = (courseId, page) =>
  useQuery({
    queryKey: ["courseNotice", courseId, page],
    queryFn: () => getCourseNoticePerPage(courseId, page),
  });

export const registCourseNotice = () =>
  useMutation({
    mutationFn: (data) => createCourseNotice(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseNotice"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });

export const modifyCourseNotice = () =>
  useMutation({
    mutationFn: ({ noticeId, data }) => updateCourseNotice(noticeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseNotice"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
export const removeCourseNotice = () =>
  useMutation({
    mutationFn: (noticeId) => deleteCourseNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["courseNotice"]);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
  });
