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
import { useLoginStore } from "@stores/member/loginStore.js";
import DOMPurify from "dompurify";
import truncate from "html-truncate";
const CommunityCard = ({ board, type }) => {
  const GOOGLE_LOGIN_URL = import.meta.env
    .VITE_GOOGLE_LOGIN_URL;
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  const [initialBoard, setInitialBoard] =
    useState(board);
  const sanitizedHtml = DOMPurify.sanitize(
    initialBoard.content
  );
  const truncatedHtml = truncate(
    sanitizedHtml,
    10
  );
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL(
        type === "QNA" ? "Q&A" : "concern",
        board.articleId
      ),
      {
        state: {
          board: initialBoard,
        },
      }
    );
  };
  const { likeQna, scrapQna } = useQnaStore();
  const { likeConcern, scrapConcern } =
    useConcernStore();
  const handleClickLike = () => {
    if (isLogin) {
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
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
    }
  };
  const handleClickBookMark = () => {
    if (isLogin) {
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
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
    }
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
      <Content
        dangerouslySetInnerHTML={{
          __html: truncatedHtml,
        }}
      />
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
