import { useState } from "react";
import TextArea from "../../common/textarea/TextArea";
import { Flex } from "@components/common/flex/Flex";
import Rating from "../../common/rating/Rating";
import Text from "@components/common/text/Text";
import Select from "@components/common/select/Select";
import Button from "@components/common/button/Button";
import {
  useCourseReviewQuery,
  useRegistCourseReviewMutation,
} from "@apis/queries/useCourseReviewQuery";
import { useParams } from "react-router-dom";
import CourseReviewCard from "@components/courseDetail/courseReview/CourseReviewCard";
import { typo } from "@styles/style";
import { useMemberStore } from "@stores/member/memberStore";
const CourseReview = () => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [order, setOrder] = useState("최신순");
  const registCourseReview = useRegistCourseReviewMutation();
  const { courseId } = useParams();
  const memberId = useMemberStore((state) => state.member).memberId;

  const { data, isLoading, isSuccess } = useCourseReviewQuery(courseId);

  if (isSuccess) {
    console.log(data);
  }

  if (isLoading) return <p>로딩중</p>;

  console.log(memberId);

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
          <Text typo={typo.bodyLg700}>({rating})</Text>
        </Flex>
        <Button
          fill
          onClick={() => {
            registCourseReview.mutate({
              rating: rating,
              content: content,
              courseId: courseId,
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

      {isSuccess &&
        data.data.map((review) => (
          <CourseReviewCard
            nickname={review.nickname}
            createdTime={review.createdTime}
            likeCount={review.likeCount}
            // profile={review.nickname}
            isMine={review.memberId === memberId}
            rating={review.rating}
            hasReply={false}
            content={review.content}
            reviewId={review.courseReviewId}
          />
        ))}
    </Flex>
  );
};

export default CourseReview;
