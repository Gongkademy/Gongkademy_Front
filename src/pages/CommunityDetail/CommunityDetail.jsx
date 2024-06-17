import { useLocation } from "react-router-dom";
import {
  BookMarkIcon,
  LikeIcon,
  MeetballIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@/assets/svg/icons";
import {
  DetailBlock,
  Container,
  TitleContainer,
  Title,
  ContainerRow,
  ContainerCol,
  Profile,
  ContentContainer,
  Content,
  QnaImg,
  CourseName,
} from "./CommunityDetail.style";
import Button from "@components/common/button/Button";
import { useState } from "react";
import CommunityReview from "./CommunityReview";
import { color } from "@styles/palette";
const Detail = () => {
  const location = useLocation();
  const [viewReview, setViewReview] =
    useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };
  return (
    <DetailBlock>
      <Container>
        <TitleContainer>
          <Title>제목</Title>
          <ContainerRow>
            <ContainerCol type="icon">
              <BookMarkIcon
                width="16"
                height="16"
              />
              <Content>0</Content>
            </ContainerCol>
            <ContainerCol type="icon">
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
            </ContainerCol>
            <ContainerCol type="icon">
              <MeetballIcon
                width="16"
                height="16"
              />
            </ContainerCol>
          </ContainerRow>
        </TitleContainer>
        <ContainerRow type="center">
          <Profile></Profile>
          <Content>mung5079</Content>
        </ContainerRow>
        <Content>2024.06.15 21:35 작성</Content>
        <ContentContainer>
          <Content type="black">
            4:15 {"\n"}
            혹시 T/G*Ip 어떻게 나온건가요? {"\n"}
            어떤영상에서 설명해주셨는지 알려주실수
            있을까요?{"\n"}
            영상 다봤는데 처음 보는거 같아서요
          </Content>
          <ContainerRow type="center">
            <QnaImg></QnaImg>
            <ContainerCol>
              <CourseName>강좌명</CourseName>
              <Content>강의명</Content>
            </ContainerCol>
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
        </ContentContainer>
        {viewReview && <CommunityReview />}
      </Container>
    </DetailBlock>
  );
};
export default Detail;
