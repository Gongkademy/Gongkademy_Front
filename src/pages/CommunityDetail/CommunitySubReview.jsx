import {
  ContainerRow,
  Profile,
  Content,
} from "./CommunityDetail.style";
import { LikeIcon } from "@/assets/svg/icons";
import { SubReviewContainer } from "./CommunityReview.style";
import Button from "@components/common/button/Button";
import { useState } from "react";
import CommunitySubReview from "./CommunitySubReview";
const SubReview = () => {
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };
  return (
    <>
      <SubReviewContainer>
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
      </SubReviewContainer>
    </>
  );
};
export default SubReview;
