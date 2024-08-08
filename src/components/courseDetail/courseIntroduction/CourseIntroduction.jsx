import { Flex } from "@components/common/flex/Flex";
import TextArea from "@components/common/textarea/TextArea";
import Textbox from "@components/common/textbox/TextBox";
import { useCourseIntroQuery } from "@apis/queries/useCourseDetailQuery";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseIntroduction = () => {
  const params = useParams();
  const { data, isSuccess } = useCourseIntroQuery(params.courseId);
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  });

  return (
    <div>
      {isSuccess && (
        <Flex direction="column" gap="2rem">
          <Textbox height={"5rem"}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(data.data.summary)),
              }}
            />
          </Textbox>
          <Textbox height={"5rem"}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.data.preCourses),
              }}
            />
          </Textbox>
          <Textbox height={"10rem"}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.data.introduction),
              }}
            />
          </Textbox>
        </Flex>
      )}
    </div>
  );
};

export default CourseIntroduction;
