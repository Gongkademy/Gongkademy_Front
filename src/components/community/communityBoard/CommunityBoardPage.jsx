import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";
import NoticeCard from "@components/community/Card/NoticeCard";
import CommunityCard from "@components/community/Card/CommunityCard";
import { StyledButton } from "@pages/Community/CommunityPage.style";
import { useEffect, useState } from "react";
import useNoticeStore from "@/stores/Community/NoticeStore";
import useQnaStore from "@/stores/Community/QnaStore";
import useConcernStore from "@/stores/Community/ConcernStore";

const CommunityBoardPage = ({ type }) => {
  const [boardList, setBoardList] = useState([]);
  const { noticeList, fetchNoticeList } =
    useNoticeStore();
  const { qnaList, fetchQnaList } = useQnaStore();
  const { concernList, fetchConcernList } =
    useConcernStore();
  useEffect(() => {
    fetchNoticeList();
  }, [noticeList]);
  useEffect(() => {
    if (type === "Q&A") {
      fetchQnaList("", "", 1);
      setBoardList(qnaList);
    } else {
      fetchConcernList("", "", 1);
      setBoardList(concernList);
    }
  }, [type]);
  return (
    <>
      {noticeList.map((notice) => (
        <NoticeCard
          notice={notice}
          key={notice.articleId}
        />
      ))}
      <br />
      {boardList.map((board) => (
        <CommunityCard
          board={board}
          key={board.articleId}
          type={type}
        />
      ))}
      <Link
        to={PATH.COMMUNITY_REGIST(type)}
        state={{ type }}
        style={{
          inline: "block",
          width: "100%",
          "text-align": "center",
        }}
      >
        <StyledButton fill bold>
          ✍️{" "}
          {type === "Q&A"
            ? "질문하기"
            : "고민 나누기"}
        </StyledButton>
      </Link>
    </>
  );
};

export default CommunityBoardPage;
