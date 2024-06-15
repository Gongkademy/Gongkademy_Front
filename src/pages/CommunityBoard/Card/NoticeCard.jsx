import {
  NoticeContainer,
  NoticeTitle,
  ContentContainer,
  Content,
  Pointer,
} from "./NoticeCard.style.js";
import {
  Visible,
  Like,
  LikeActive,
} from "@assets/svg/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@router/Constants";
const Notice = ({ notice }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL(
        "notice",
        initialNotice.id
      )
    );
  };
  const [initialNotice, setInitialNotice] =
    useState(notice);
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
    setInitialNotice((prevNotice) => ({
      ...prevNotice,
      like: likeActive
        ? prevNotice.like - 1
        : prevNotice.like + 1,
    }));
  };
  return (
    <NoticeContainer>
      <Pointer>
        <NoticeTitle
          onClick={handleClickConcernCard}
        >
          {initialNotice.title}
        </NoticeTitle>
      </Pointer>
      <ContentContainer>
        <Content>{initialNotice.date}</Content>
        <Content>
          <Pointer>
            {likeActive ? (
              <LikeActive
                width="16"
                height="16"
                onClick={handleClickLike}
              />
            ) : (
              <Like
                width="16"
                height="12"
                onClick={handleClickLike}
              />
            )}
            {initialNotice.like}
          </Pointer>
        </Content>
        <Content>
          <Visible width="16" height="16" />
          {initialNotice.viewCnt}
        </Content>
      </ContentContainer>
    </NoticeContainer>
  );
};
export default Notice;
