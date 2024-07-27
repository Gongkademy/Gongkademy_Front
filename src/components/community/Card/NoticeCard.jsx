import {
  NoticeContainer,
  NoticeTitle,
  ContentContainer,
  Content,
  Pointer,
} from "./NoticeCard.style.js";
import {
  VisibleIcon,
  LikeIcon,
} from "@assets/svg/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@router/Constants";
import { color } from "@styles/style";
import useNoticeStore from "@stores/Community/NoticeStore";
import { useLoginStore } from "@stores/member/loginStore.js";
const Notice = ({ notice }) => {
  const GOOGLE_LOGIN_URL = import.meta.env
    .VITE_GOOGLE_LOGIN_URL;
  const navigate = useNavigate();
  const { likeNotice } = useNoticeStore();
  const [initialNotice, setInitialNotice] =
    useState(notice);
  const { isLogin } = useLoginStore();
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL(
        "notice",
        initialNotice.articleId
      ),
      {
        state: {
          board: initialNotice,
        },
      }
    );
  };
  const handleClickLike = () => {
    if (isLogin) {
      likeNotice(initialNotice.articleId);
      setInitialNotice((prevNotice) => ({
        ...prevNotice,
        isLike: !prevNotice.isLiked,
        likeCount: prevNotice.isLiked
          ? prevNotice.like - 1
          : prevNotice.like + 1,
      }));
    } else {
      window.location.href = GOOGLE_LOGIN_URL;
      return;
    }
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
        <Content>
          {initialNotice.createTime}
        </Content>
        <Content>
          <Pointer>
            {initialNotice.isLiked ? (
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
            {initialNotice.likeCount}
          </Pointer>
        </Content>
        <Content>
          <VisibleIcon width="16" height="16" />
          {initialNotice.hit}
        </Content>
      </ContentContainer>
    </NoticeContainer>
  );
};
export default Notice;
