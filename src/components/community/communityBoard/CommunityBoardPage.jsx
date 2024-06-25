import {
  useLocation,
  Link,
} from "react-router-dom";
import { PATH } from "@router/Constants";
import NoticeCard from "@components/community/Card/NoticeCard";
import { NOTICE_LIST } from "@dummy/Notice";
import { QNA_LIST } from "@dummy/Qna";
import QnaCard from "@components/community/Card/QnaCard";
import ConcernCard from "@components/community/Card/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
import { StyledButton } from "@pages/Community/CommunityPage.style";
const CONCERNS = CONCERN_LIST;
const notices = NOTICE_LIST;
const qnas = QNA_LIST;
const CommunityBoardPage = ({ type }) => {
  const location = useLocation();
  return (
    <>
      <NoticeCard notice={notices[0]} />
      <NoticeCard notice={notices[1]} />
      <NoticeCard notice={notices[2]} />
      <br />
      {type === "Q&A" ? (
        <>
          {qnas.map((qna) => (
            <>
              <QnaCard qna={qna} key={qna.id} />
              {qna.id < qnas.length && <hr />}
            </>
          ))}
        </>
      ) : (
        <>
          {CONCERNS.map((concern) => (
            <ConcernCard
              concern={concern}
              key={concern.id}
            />
          ))}
        </>
      )}
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
