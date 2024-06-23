import {
  ContainerRow,
  Profile,
  Content,
} from "../../../pages/CommunityDetail/CommunityDetail.style";
import {
  LikeIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@/assets/svg/icons";
import { ReviewContainer } from "./Review.style";
import Button from "@components/common/button/Button";
import { useState } from "react";
import { color } from "@styles/style";
import RegistReview from "../../../pages/CommunityBoard/Regist/RegistReview";
import Rating from "../rating/Rating";
import { Flex } from "@components/common/flex/Flex";
import Text from "@components/common/text/Text";

const Review = ({ content }) => {
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const handleClickGoWriteReview = () => {
    setWriteReview(!writeReview);
  };
  const handleClickLike = () => {
    setIsLikeActive(!isLikeActive);
  };

  const [viewReview, setViewReview] = useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };

  return (
    <>
      <ReviewContainer isReply={content.parentId !== undefined}>
        <ContainerRow type="center">
          <Profile src={content.profile} />
          <Content>{content.nickname}</Content>
          <Content>{content.createdTime}</Content>
        </ContainerRow>
        <Content type="black">{content.content}</Content>

        {content.rating !== undefined && (
          <Flex align="center" gap="1rem">
            <Rating width={"1rem"} count={5} value={content.rating} />
            <Text typo="bodyLg700">({content.rating})</Text>
          </Flex>
        )}

        <ContainerRow type="center">
          <LikeIcon
            fill={isLikeActive ? color.pinkRed : "none"}
            stroke={isLikeActive ? "none" : color.black}
            width="1rem"
            height="1rem"
            onClick={handleClickLike}
          />
          <Content>{content.likeCount}</Content>
        </ContainerRow>

        {content.parentId === undefined && (
          <ContainerRow>
            <Button text onClick={handleClickViewReview}>
              {!viewReview ? (
                <ChevronDownIcon width="16" height="16" />
              ) : (
                <ChevronUpIcon width="16" height="16" />
              )}
              {content.children.length}개 댓글 보기
            </Button>
            <Button text onClick={handleClickGoWriteReview}>
              <ChatIcon width="16" height="16" /> 댓글 작성하기
            </Button>
          </ContainerRow>
        )}
      </ReviewContainer>
      {writeReview && <RegistReview />}
      {viewReview &&
        content.children.map((child, idx) => (
          <Review key={idx} content={child} />
        ))}
    </>
  );
};
export default Review;
