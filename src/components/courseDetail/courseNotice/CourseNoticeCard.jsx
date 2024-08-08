import { LikeIcon } from "@assets/svg/icons";
import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import { ImageBox } from "@components/common/imageBox/ImageBox.style";
import Profile from "@components/common/profile/Profile";
import Review from "@components/common/review/Review";
import Text from "@components/common/text/Text";
import TextArea from "@components/common/textarea/TextArea";
import { CardContainer } from "@components/courseDetail/courseNotice/CourseNoticeCard.style";
import CourseNoticeReview from "@components/courseDetail/courseNotice/CourseNoticeReview";
import CourseReview from "@components/courseDetail/courseReview/CourseReview";
import { useLikeCourseReviewMutation } from "@apis/queries/useCourseReviewQuery";
import { color, typo } from "@styles/style";
import DOMPurify from "dompurify";
import { useState } from "react";

const CourseNoticeCard = ({ content }) => {
  const [isLikeActive, setIsLikeActive] = useState(false);

  const likeCourseReview = useLikeCourseReviewMutation();

  console.log(content);
  const handleClickLike = () => {
    likeCourseReview.mutate({
      likeCateg: "COMMENT",
      commentReviewId: content.id,
    });
    setIsLikeActive(!isLikeActive);
  };
  return (
    <CardContainer>
      <Flex justify="space-between">
        <Text typo={typo.titleRg700}>{content.title}</Text>
        <Flex align="center" gap="1rem">
          <Profile width={"3rem"} height={"3rem"} />
          <Text typo={typo.bodyRg400}>관리자</Text>
          <Text typo={typo.bodySm400} color={color.gray600}>
            {content.createdTime}작성
          </Text>
        </Flex>
      </Flex>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content.content),
        }}
      />
      <Flex gap="1rem" align="center" justify="start">
        <ImageBox width="1.5rem" height="1.5rem">
          <LikeIcon
            fill={isLikeActive ? color.pinkRed : "none"}
            stroke={isLikeActive ? "none" : color.black}
            width="1rem"
            height="1rem"
            onClick={handleClickLike}
          />
        </ImageBox>{" "}
        {/* <Text typo={typo.bodyRg400}>{likeCount}</Text> */}
      </Flex>
    </CardContainer>
  );
};

export default CourseNoticeCard;
