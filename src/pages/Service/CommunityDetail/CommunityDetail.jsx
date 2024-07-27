import { useLocation } from "react-router-dom";
import {
  BookMarkIcon,
  LikeIcon,
  MeetballIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@assets/svg/icons";

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
import { useState, useEffect } from "react";
import Review from "@components/common/review/Review";
import { color } from "@styles/style";
import RegistReview from "@components/community/Regist/RegistReview";
import { review } from "@dummy/Review";
import MeetballSelect from "@components/common/select/MeetballSelect";
import { PATH } from "@router/Constants";
import useQnaStore from "@stores/Community/QnaStore";
import useNoticeStore from "@stores/Community/NoticeStore";
import useConcernStore from "@stores/Community/ConcernStore";
import { useLoginStore } from "@stores/member/loginStore";

const CommunityDetail = () => {
  const GOOGLE_LOGIN_URL = import.meta.env
    .VITE_GOOGLE_LOGIN_URL;
  const { isLogin } = useLoginStore();
  const location = useLocation();
  const { state } = useLocation();
  const splitPath = location.pathname.split("/");
  const type = splitPath[2];
  const { board } = state;
  const [initialBoard, setInitialBoard] =
    useState(board);
  const {
    notice,
    fetchNoticeDetail,
    likeNotice,
    scrapNotice,
  } = useNoticeStore();
  const {
    concern,
    fetchConcernDetail,
    likeConcern,
    scrapConcern,
  } = useConcernStore();
  const {
    qna,
    fetchQnaDetail,
    likeQna,
    scrapQna,
  } = useQnaStore();

  const [viewReview, setViewReview] =
    useState(false);
  const [writeReview, setWriteReview] =
    useState(false);
  const [isMeetballClick, setIsMeetballClick] =
    useState(false);
  const handleClickViewReview = () => {
    setViewReview(!viewReview);
  };
  const handleClickLike = () => {
    if (isLogin) {
      if (type === "notice") {
        likeNotice(initialBoard.articleId);
      } else if (type === "qna") {
        likeQna(initialBoard.articleId);
      } else {
        likeConcern(initialBoard.articleId);
      }
      setInitialBoard((prevBoard) => ({
        ...prevBoard,
        isLiked: !prevBoard.isLiked,
        likeCount: prevBoard.isLiked
          ? prevBoard.likeCount - 1
          : prevBoard.likeCount + 1,
      }));
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
    }
  };
  const handleClickBookMark = () => {
    if (isLogin) {
      if (type === "notice") {
        scrapNotice(initialBoard.articleId);
      } else if (type === "qna") {
        scrapQna(initialBoard.articleId);
      } else {
        scrapConcern(initialBoard.articleId);
      }
      setInitialBoard((prevBoard) => ({
        ...prevBoard,
        isScrapped: !prevBoard.isScrapped,
        scrapCount: prevBoard.isScrapped
          ? prevBoard.scrapCount - 1
          : prevBoard.scrapCount + 1,
      }));
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
    }
  };
  const handleClickGoWriteReview = () => {
    if (isLogin) {
      setWriteReview(!writeReview);
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
    }
  };
  const handleClickMeetball = () => {
    console.log(isMeetballClick);
    setIsMeetballClick(!isMeetballClick);
  };
  return (
    <DetailBlock>
      {initialBoard && (
        <Container>
          <TitleContainer>
            <Title>{initialBoard.title}</Title>
            <ContainerRow>
              <ContainerCol type="icon">
                {initialBoard.isScrapped ? (
                  <BookMarkIcon
                    width="16"
                    height="16"
                    fill={color.yellow}
                    onClick={handleClickBookMark}
                  />
                ) : (
                  <BookMarkIcon
                    width="16"
                    height="16"
                    onClick={handleClickBookMark}
                  />
                )}
                <Content>
                  {initialBoard.scrapCount}
                </Content>
              </ContainerCol>
              <ContainerCol type="icon">
                {initialBoard.isLiked ? (
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
                <Content>
                  {initialBoard.likeCount}
                </Content>
              </ContainerCol>
              <ContainerCol
                type="icon"
                style={{ position: "relative" }}
              >
                <MeetballIcon
                  width="16"
                  height="16"
                  onClick={handleClickMeetball}
                />
                <br />
                {isMeetballClick && (
                  <MeetballSelect
                    path={PATH.COMMUNITY_UPDATE(
                      initialBoard.ariticleId
                    )}
                  />
                )}
              </ContainerCol>
            </ContainerRow>
          </TitleContainer>
          <ContainerRow type="center">
            <Profile />
            <Content>
              {initialBoard.memberId}
            </Content>
          </ContainerRow>
          <Content>
            {initialBoard.createTime} 작성
          </Content>
          <ContentContainer>
            <Content type="black">
              {initialBoard.content}
            </Content>
            {type === "qna" && (
              <ContainerRow type="center">
                <QnaImg />
                <ContainerCol>
                  <CourseName>
                    {initialBoard.lectureTitle}
                  </CourseName>
                  <Content>
                    {initialBoard.courseTitle}
                  </Content>
                </ContainerCol>
              </ContainerRow>
            )}
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
                {initialBoard.commentCount}개 댓글
                보기
              </Button>
              <Button
                text
                onClick={handleClickGoWriteReview}
              >
                <ChatIcon
                  width="16"
                  height="16"
                />{" "}
                댓글 작성하기
              </Button>
            </ContainerRow>
          </ContentContainer>
          {writeReview && <RegistReview />}
          {viewReview &&
            initialBoard.comments.map(
              (review) => (
                <Review
                  content={review.content}
                />
              )
            )}
        </Container>
      )}
    </DetailBlock>
  );
};
export default CommunityDetail;
