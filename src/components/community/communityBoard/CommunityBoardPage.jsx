import { useLocation } from "react-router-dom";
import NoticeCard from "@components/community/Card/NoticeCard";
import { NOTICE_LIST } from "@dummy/Notice";
import { QNA_LIST } from "@dummy/Qna";
import QnaCard from "@components/community/Card/QnaCard";
import ConcernCard from "@components/community/Card/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
const CONCERNS = CONCERN_LIST;
const notices = NOTICE_LIST;
const qnas = QNA_LIST;
const CommunityBoardPage = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes("Q&A") ? (
        <div>
          <NoticeCard notice={notices[0]} />
          <NoticeCard notice={notices[1]} />
          <NoticeCard notice={notices[2]} />
          <br></br>
          {qnas.map((qna) => (
            <>
              <QnaCard qna={qna} key={qna.id} />
              {qna.id < qnas.length && <hr />}
            </>
          ))}
        </div>
      ) : (
        <div>
          {CONCERNS.map((concern) => (
            <ConcernCard
              concern={concern}
              key={concern.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityBoardPage;
