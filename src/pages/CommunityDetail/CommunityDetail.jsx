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
import Review from "@components/common/review/Review";
import { color } from "@styles/style";
import RegistReview from "@pages/CommunityBoard/Regist/RegistReview";
import { review } from "@dummy/Review";

const CommunityDetail = () => {
  const location = useLocation();
  const [viewReview, setViewReview] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };
  const [likeActive, setLikeActive] = useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };
  const handleClickGoWriteReview = () => {
    setWriteReview(!writeReview);
  };
  return (
    <DetailBlock>
      <Container>
        <TitleContainer>
          <Title>제목</Title>
          <ContainerRow>
            <ContainerCol type="icon">
              <BookMarkIcon width="16" height="16" />
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
                <LikeIcon width="16" height="16" onClick={handleClickLike} />
              )}
              <Content>0</Content>
            </ContainerCol>
            <ContainerCol type="icon">
              <MeetballIcon width="16" height="16" />
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
            어떤영상에서 설명해주셨는지 알려주실수 있을까요?{"\n"}
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
            <Button text onClick={handleClickViewReview}>
              {!viewReview ? (
                <ChevronDownIcon width="16" height="16" />
              ) : (
                <ChevronUpIcon width="16" height="16" />
              )}{" "}
              1개 댓글 보기
            </Button>
            <Button text onClick={handleClickGoWriteReview}>
              <ChatIcon width="16" height="16" /> 댓글 작성하기
            </Button>
          </ContainerRow>
        </ContentContainer>
        {writeReview && <RegistReview />}
        {viewReview && <Review content={review[0]} />}
      </Container>
    </DetailBlock>
  );
};
export default CommunityDetail;
