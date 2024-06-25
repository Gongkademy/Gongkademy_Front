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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@router/Constants";
import { color } from "@styles/style";
const CommunityCard = ({ board, type }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL(type, initialBoard.id)
    );
  };
  const [initialBoard, setInitialBoard] =
    useState(board);
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
    setInitialBoard((prevBoard) => ({
      ...prevBoard,
      like: likeActive
        ? prevBoard.like - 1
        : prevBoard.like + 1,
    }));
  };

  const handleClickBookMark = () => {
    setInitialBoard((prevBoard) => ({
      ...prevBoard,
      scrap: !prevBoard.scrap,
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
          {initialBoard.scrap ? (
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
          <Content>{initialBoard.writer}</Content>
          <Content>3분전</Content>
          <Content>{initialBoard.course}</Content>
        </ContentContainer>
        <ContentContainer>
          <Content>
            <ChatIcon width="16" height="16" />
            12
          </Content>
          <Content>
            <Pointer>
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
              {initialBoard.like}
            </Pointer>
          </Content>
          <Content>
            <VisibleIcon width="16" height="16" />
            {initialBoard.viewCnt}
          </Content>
        </ContentContainer>
      </InfoContainer>
    </CardContainer>
  );
};
export default CommunityCard;
