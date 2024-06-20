import { useEffect, useState } from "react";
import TextArea from "../../common/textarea/TextArea";
import { Flex } from "@components/common/flex/Flex";
import Rating from "../../common/rating/Rating";
import Text from "@components/common/text/Text";
const CourseReview = () => {
  const [content, setContent] = useState();
  const [rating, setRating] = useState(0);
  useEffect(() => {
    console.log(content);
    console.log(rating);
  }, [content]);

  return (
    <Flex as="section" direction="column" gap="1rem">
      <Flex align="center" gap="1rem">
        <Rating count={5} value={rating} onChange={setRating} />
        <Text typo="bodyLg700">({rating})</Text>
      </Flex>
      <TextArea placeholder={"수강평을 작성해주세요"} onChange={setContent} />
    </Flex>
  );
};

export default CourseReview;
