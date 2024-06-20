import { useEffect, useState } from "react";
import TextArea from "../../common/textarea/TextArea";
import { Flex } from "@components/common/flex/Flex";
const CourseReview = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Flex as="section">
      <TextArea placeholder={"수강평을 작성해주세요"} onChange={setContent} />
    </Flex>
  );
};

export default CourseReview;
