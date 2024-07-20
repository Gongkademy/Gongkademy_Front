import {
  CardContainer,
  Title,
  Content,
  ContentContainer,
  TitleContainer,
  InfoContainer,
  Pointer,
} from "./CommunityCard.style.js";
import {
  BookMarkIcon,
  LikeIcon,
  VisibleIcon,
  ChatIcon,
} from "@assets/svg/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@router/Constants";
import { color } from "@styles/style";
import useQnaStore from "@stores/Community/QnaStore";
import useConcernStore from "@stores/Community/ConcernStore";
const CommunityCard = ({ board, type }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL(
        type === "QNA" ? "Q&A" : "concern",
        board.articleId
      )
    );
  };
  const { likeQna, scrapQna } = useQnaStore();
  const { likeConcern, scrapConcern } =
    useConcernStore();
  const [initialBoard, setInitialBoard] =
    useState(board);
  const handleClickLike = () => {
    if (type === "QNA") {
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
  };
  const handleClickBookMark = () => {
    if (type === "QNA") {
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
  };
  return (
    <CardContainer>
      <TitleContainer>
        <Pointer>
          <Title onClick={handleClickConcernCard}>
            {board.title}
          </Title>
        </Pointer>
        <Pointer>
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
        </Pointer>
      </TitleContainer>
      <Content>{initialBoard.content}</Content>
      <InfoContainer>
        <ContentContainer>
          <Content>
            {initialBoard.memberId}
          </Content>
          <Content>3분전</Content>
          {type === "QNA" && (
            <Content>
              {initialBoard.lectureTitle}
            </Content>
          )}
        </ContentContainer>
        <ContentContainer>
          <Content>
            <ChatIcon width="16" height="16" />
            {initialBoard.commentCount}
          </Content>
          <Content>
            <Pointer>
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
              {initialBoard.likeCount}
            </Pointer>
          </Content>
          <Content>
            <VisibleIcon width="16" height="16" />
            {initialBoard.hit}
          </Content>
        </ContentContainer>
      </InfoContainer>
    </CardContainer>
  );
};
export default CommunityCard;
