import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";
import NoticeCard from "@components/community/Card/NoticeCard";
import { NOTICE_LIST } from "@dummy/Notice";
import { QNA_LIST } from "@dummy/Qna";
import CommunityCard from "@components/community/Card/CommunityCard";
import { CONCERN_LIST } from "@dummy/Concern";
import { StyledButton } from "@pages/Community/CommunityPage.style";
import { useEffect, useState } from "react";
import useNoticeStore from "@/stores/Community/NoticeStore";
import useQnaStore from "@/stores/Community/QnaStore";
import useConcernStore from "@/stores/Community/ConcernStore";
const CONCERNS = CONCERN_LIST;
const notices = NOTICE_LIST;
const qnas = QNA_LIST;
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
      fetchQnaList("");
      setBoardList(qnaList);
    } else {
      fetchConcernList("");
      setBoardList(concernList);
    }
  }, [type]);
  return (
    <>
      {noticeList.map((notice) => (
        <NoticeCard
          notice={notice}
          key={notice.id}
        />
      ))}
      {/* <NoticeCard notice={notices[0]} />
      <NoticeCard notice={notices[1]} />
      <NoticeCard notice={notices[2]} /> */}
      <br />
      {boardList.map((board) => (
        <CommunityCard
          board={board}
          key={board.id}
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
