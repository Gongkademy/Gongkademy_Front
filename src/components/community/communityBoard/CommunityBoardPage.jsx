import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";
import NoticeCard from "@components/community/Card/NoticeCard";
import CommunityCard from "@components/community/Card/CommunityCard";
import { StyledButton } from "@pages/Service/Community/CommunityPage.style";
import { useLoginStore } from "@stores/member/loginStore";
const CommunityBoardPage = ({
  type,
  noticeList,
  initialBoardList,
}) => {
  const GOOGLE_LOGIN_URL = import.meta.env
    .VITE_GOOGLE_LOGIN_URL;
  const { isLogin } = useLoginStore();
  return (
    <>
      {noticeList &&
        noticeList.map((notice) => (
          <NoticeCard
            notice={notice}
            key={notice.articleId}
          />
        ))}
      <br />
      {initialBoardList &&
        initialBoardList.map((board) => (
          <CommunityCard
            board={board}
            key={board.articleId}
            type={board.boardType}
          />
        ))}
      <Link
        to={
          isLogin
            ? PATH.COMMUNITY_REGIST(type)
            : GOOGLE_LOGIN_URL
        }
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
