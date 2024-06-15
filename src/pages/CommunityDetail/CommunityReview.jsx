import {
  ContainerRow,
  Profile,
  Content,
} from "./CommunityDetail.style";
import {
  BookMarkIcon,
  Like,
  Meetball,
  Chat,
  ChevronDown,
  ChevronUp,
} from "@/assets/svg/icons";
import { ReviewContainer } from "./CommunityReview.style";
import Button from "@components/common/button/Button";
import { useState } from "react";
import CommunitySubReview from "./CommunitySubReview";
const Review = () => {
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
          <Like width="16" height="16" />
          <Content>0</Content>
        </ContainerRow>
        <ContainerRow>
          <Button
            text
            onClick={handleClickViewReview}
          >
            {!viewReview ? (
              <ChevronDown
                width="16"
                height="16"
              />
            ) : (
              <ChevronUp width="16" height="16" />
            )}{" "}
            1개 댓글 보기
          </Button>
          <Button text>
            <Chat width="16" height="16" /> 댓글
            작성하기
          </Button>
        </ContainerRow>
      </ReviewContainer>
      {viewReview && <CommunitySubReview />}
    </>
  );
};
export default Review;
