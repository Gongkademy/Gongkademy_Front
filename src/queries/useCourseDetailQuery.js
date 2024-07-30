import { getCourseInfo } from "@apis/course/courseApi";
import { useQuery } from "@tanstack/react-query";

export const useCourseIntroQuery = (courseId) =>
  useQuery({
    queryKey: ["courseIntro", courseId],
    queryFn: () => getCourseInfo(courseId),
  });
