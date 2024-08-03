import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import Profile from "@components/common/profile/Profile";
import Review from "@components/common/review/Review";
import Text from "@components/common/text/Text";
import TextArea from "@components/common/textarea/TextArea";
import { CardContainer } from "@components/courseDetail/courseNotice/CourseNoticeCard.style";
import CourseNoticeReview from "@components/courseDetail/courseNotice/CourseNoticeReview";
import { color, typo } from "@styles/style";
import DOMPurify from "dompurify";
import { useState } from "react";

const CourseNoticeCard = ({ content }) => {
  const [comment, setComment] = useState("");

  return (
    <CardContainer>
      <Flex justify="space-between">
        <Text typo={typo.titleRg700}>제목</Text>
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
      <Flex gap="0.75rem" width="100%" direction="column">
        <p>{comment}</p>
        <TextArea onChange={(e) => setComment(e.target.value)} />
        <Flex justify="end" width="100%">
          <Button fill>댓글 입력</Button>
        </Flex>
      </Flex>
      <CourseNoticeReview />
    </CardContainer>
  );
};

export default CourseNoticeCard;
