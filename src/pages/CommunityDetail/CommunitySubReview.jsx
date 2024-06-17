import {
  ContainerRow,
  Profile,
  Content,
} from "./CommunityDetail.style";
import { LikeIcon } from "@/assets/svg/icons";
import { SubReviewContainer } from "./CommunityReview.style";
import { useState } from "react";
import { color } from "@styles/palette";
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
          {likeActive ? (
            <LikeIcon
              fill={color.pinkRed}
              stroke="none"
              width="16"
              height="16"
              onClick={handleClickLike}
            />
          ) : (
            <LikeIcon
              width="16"
              height="16"
              onClick={handleClickLike}
            />
          )}
          <Content>0</Content>
        </ContainerRow>
      </SubReviewContainer>
    </>
  );
};
export default SubReview;
