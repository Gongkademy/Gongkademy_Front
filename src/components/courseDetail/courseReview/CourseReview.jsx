import { useEffect, useState } from "react";
import TextArea from "../../common/textarea/TextArea";
import { Flex } from "@components/common/flex/Flex";
import Rating from "../../common/rating/Rating";
import Text from "@components/common/text/Text";
import Select from "@components/common/select/Select";
import Review from "../../common/review/Review";
import { review } from "../../../dummy/Review";
import Button from "@components/common/button/Button";
import { useRegistCourseReviewMutation } from "@queries/useCourseReviewQuery";
import { useParams } from "react-router-dom";
const CourseReview = () => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [order, setOrder] = useState("최신순");
  const registCourseReview = useRegistCourseReviewMutation();
  const params = useParams();

  return (
    <Flex as="section" direction="column" gap="1rem">
      <Flex justify="space-between">
        <Flex align="center" gap="1rem">
          <Rating
            width={"1.5rem"}
            count={5}
            value={rating}
            onChange={setRating}
          />
          <Text typo="bodyLg700">({rating})</Text>
        </Flex>
        <Button
          fill
          onClick={() => {
            registCourseReview.mutate({
              rating: rating,
              content: content,
              courseId: params.courseId,
            });
          }}
        >
          등록하기
        </Button>
      </Flex>

      <TextArea
        placeholder={"수강평을 작성해주세요"}
        onChange={(e) => setContent(e.target.value)}
      />

      <Select
        options={["최신순", "좋아요순", "높은 평점순", "낮은 평점순"]}
        selectedValue={order}
        setSelectedValue={setOrder}
        width={"12rem"}
      />

      <Review content={review[0]} />
    </Flex>
  );
};

export default CourseReview;
