import {
  CardContainer,
  Title,
  Content,
  ContentContainer,
  TitleContainer,
  InfoContainer,
  Pointer,
} from "./QnaCard.style.js";
import {
  BookMarkIcon,
  Like,
  LikeActive,
  Visible,
  Chat,
} from "@assets/svg/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@router/Constants";
import { color } from "@styles/palette";
const QnaCard = ({ qna }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(PATH.COMMUNITY_DETAIL("Q&A", initialQna.id));
  };
  const [initialQna, setInitialQna] = useState(qna);
  const [likeActive, setLikeActive] = useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
    setInitialQna((prevQna) => ({
      ...prevQna,
      like: likeActive ? prevQna.like - 1 : prevQna.like + 1,
    }));
  };

  const handleClickBookMark = () => {
    setInitialQna((prevQna) => ({
      ...prevQna,
      scrap: !prevQna.scrap,
    }));
  };
  return (
    <CardContainer>
      <TitleContainer>
        <Pointer>
          <Title onClick={handleClickConcernCard}>{qna.title}</Title>
        </Pointer>
        <Pointer>
          {initialQna.scrap ? (
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
      <Content>{initialQna.content}</Content>
      <InfoContainer>
        <ContentContainer>
          <Content>{initialQna.writer}</Content>
          <Content>3분전</Content>
          <Content>{initialQna.course}</Content>
        </ContentContainer>
        <ContentContainer>
          <Content>
            <Chat width="16" height="16" />
            12
          </Content>
          <Content>
            <Pointer>
              {likeActive ? (
                <LikeActive width="16" height="16" onClick={handleClickLike} />
              ) : (
                <Like width="16" height="12" onClick={handleClickLike} />
              )}
              {initialQna.like}
            </Pointer>
          </Content>
          <Content>
            <Visible width="16" height="16" />
            {initialQna.viewCnt}
          </Content>
        </ContentContainer>
      </InfoContainer>
    </CardContainer>
  );
};
export default QnaCard;
