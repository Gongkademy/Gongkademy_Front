import {
  ContainerRow,
  Profile,
  Content,
} from "./CommunityDetail.style";
import {
  LikeIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@/assets/svg/icons";
import { ReviewContainer } from "./CommunityReview.style";
import Button from "@components/common/button/Button";
import { useState } from "react";
import CommunitySubReview from "./CommunitySubReview";
const Review = () => {
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };
  const [viewReview, setViewReview] =
    useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };
  return (
    <>
      <ReviewContainer>
        <ContainerRow type="center">
          <Profile></Profile>
          <Content>mung5079</Content>
          <Content>3분전</Content>
        </ContainerRow>
        <Content type="black">리뷰내용</Content>
        <ContainerRow type="center">
          <LikeIcon
            width="16"
            height="16"
            fill={
              likeActive ? "pinkred" : "current"
            }
            onCLick={handleClickLike}
          />
          <Content>0</Content>
        </ContainerRow>
        <ContainerRow>
          <Button
            text
            onClick={handleClickViewReview}
          >
            {!viewReview ? (
              <ChevronDownIcon
                width="16"
                height="16"
              />
            ) : (
              <ChevronUpIcon
                width="16"
                height="16"
              />
            )}{" "}
            1개 댓글 보기
          </Button>
          <Button text>
            <ChatIcon width="16" height="16" />{" "}
            댓글 작성하기
          </Button>
        </ContainerRow>
      </ReviewContainer>
      {viewReview && <CommunitySubReview />}
    </>
  );
};
export default Review;
