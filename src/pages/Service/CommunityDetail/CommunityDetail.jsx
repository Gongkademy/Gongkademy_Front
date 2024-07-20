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
const CommunityDetail = () => {
  const location = useLocation();
  const splitPath = location.pathname.split("/");
  const type = splitPath[2];
  const boardId = splitPath[3];
  const [board, setBoard] = useState(null);
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
  useEffect(() => {
    const fetchData = async () => {
      let fetchBoard;
      if (type === "notice") {
        await fetchNoticeDetail(boardId);
        fetchBoard = notice;
      } else if (type === "concern") {
        await fetchConcernDetail(boardId);
        fetchBoard = concern;
      } else {
        await fetchQnaDetail(boardId);
        fetchBoard = qna;
      }
      setBoard(fetchBoard);
    };
    fetchData();
  }, [board]);
  console.log(board);
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
    if (type === "notice") {
      likeNotice(boardId);
    } else if (type === "qna") {
      likeQna(boardId);
    } else {
      likeConcern(boardId);
    }
  };
  const handleClickBookMark = () => {
    if (type === "notice") {
      scrapNotice(boardId);
    } else if (type === "qna") {
      scrapQna(boardId);
    } else {
      scrapConcern(boardId);
    }
  };
  const handleClickGoWriteReview = () => {
    setWriteReview(!writeReview);
  };
  const handleClickMeetball = () => {
    console.log(isMeetballClick);
    setIsMeetballClick(!isMeetballClick);
  };
  if (!board) {
    return <div>Loading...</div>;
  }
  return (
    <DetailBlock>
      <Container>
        <TitleContainer>
          <Title>{board.title}</Title>
          <ContainerRow>
            <ContainerCol type="icon">
              {board.isScrapped ? (
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
              <Content>0</Content>
            </ContainerCol>
            <ContainerCol type="icon">
              {board.iLiked ? (
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
                    board.ariticleId
                  )}
                />
              )}
            </ContainerCol>
          </ContainerRow>
        </TitleContainer>
        <ContainerRow type="center">
          <Profile />
          <Content>{board.memberId}</Content>
        </ContainerRow>
        <Content>{board.createTime} 작성</Content>
        <ContentContainer>
          <Content type="black">
            {board.content}
          </Content>
          {type === "qna" && (
            <ContainerRow type="center">
              <QnaImg />
              <ContainerCol>
                <CourseName>
                  {board.lectureTitle}
                </CourseName>
                <Content>
                  {board.courseTitle}
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
              {board.commentCount}개 댓글 보기
            </Button>
            <Button
              text
              onClick={handleClickGoWriteReview}
            >
              <ChatIcon width="16" height="16" />{" "}
              댓글 작성하기
            </Button>
          </ContainerRow>
        </ContentContainer>
        {writeReview && <RegistReview />}
        {viewReview &&
          board.comments.map((review) => (
            <Review content={review.content} />
          ))}
      </Container>
    </DetailBlock>
  );
};
export default CommunityDetail;
