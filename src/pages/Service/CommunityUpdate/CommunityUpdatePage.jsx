import {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import {
  Container,
  StyledInput,
} from "@pages/Service/CommunityRegist/CommunityRegistPage.style";
import RegistCourse from "@components/community/Regist/RegistCourse";
import QnaEditor from "@components/community/Regist/QnaEditor";
import useQnaStore from "@stores/Community/QnaStore";
import useConcernStore from "@stores/Community/ConcernStore";
import { PATH } from "@router/Constants";
import Modal from "react-modal";
import Alarm from "@components/common/modal/Alarm/Alarm";
import ConcernEditor from "@components/community/Regist/ConcernEditor";
import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import ConfirmModal from "@components/common/modal/confirmModal/ConfirmModal";
const CommunityRegistPage = () => {
  const { communityType, id } = useParams();
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const { qna, fetchQnaDetail, updateQna } =
    useQnaStore();
  const {
    concern,
    fetchConcernDetail,
    updateConcern,
  } = useConcernStore();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCourse, setSelectedCourse] =
    useState("");
  const [selectedLecture, setSelectedLecture] =
    useState("");

  const fetchBoard = async (articleId) => {
    if (communityType === "Q&A") {
      return await fetchQnaDetail(articleId);
    } else {
      return await fetchConcernDetail(articleId);
    }
  };
  useEffect(() => {
    fetchBoard(id);
  }, []);
  useEffect(() => {
    if (qna) {
      setTitle(qna.title);
      setContent(qna.content);
      setSelectedCourse(qna.courseTitle);
      setSelectedLecture(qna.lectureTitle);
    }
    if (concern) {
      setTitle(concern.title);
      setContent(concern.content);
    }
  }, [qna, concern]);
  const handleClickRegistButton = () => {
    setContent(
      editorRef.current.getEditor().root.innerHTML
    );
    setIsOpen(true);
  };
  const handleClickButton = () => {
    if (communityType === "Q&A") {
      const board = {
        boardType: "QNA",
        memberId: "1",
        title: title,
        content: content,
        lectureTitle: selectedLecture,
        courseTitle: selectedCourse,
      };
      updateQna(id, board);
    } else {
      const board = {
        boardType: "CONSULT",
        memberId: 1,
        title: title,
        content: content,
      };
      console.log(board);
      updateConcern(id, board);
    }
    setTitle("");
    setSelectedCourse("강좌를 선택해주세요.");
    setSelectedLecture("강의를 선택해주세요.");
    navigate(
      PATH.COMMUNITY(
        communityType === "Q&A"
          ? "Q&A"
          : "concern"
      ) + `?keyword=&criteria=&pageNo=1`
    );
  };
  return (
    <>
      <Container>
        <ConfirmModal
          isOpen={isOpen}
          title="게시글을 수정하시겠습니까?"
          messages={[
            "커뮤니티 페이지로 이동합니다.",
          ]}
          close={{
            text: "취소",
            onClick: () => SetIsOpen(false),
          }}
          confirm={{
            text: "확인",
            onClick: handleClickButton,
          }}
        />
        <Flex width="100%" justify="flex-end">
          <Button
            fill
            onClick={handleClickRegistButton}
          >
            수정하기
          </Button>
        </Flex>
        <StyledInput
          placeholder={title}
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        {communityType == "Q&A" && (
          <RegistCourse
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            selectedLecture={selectedLecture}
            setSelectedLecture={
              setSelectedLecture
            }
          />
        )}
        {communityType == "Q&A" ? (
          <QnaEditor
            value={content}
            content={content}
            onChange={setContent}
            ref={editorRef}
          />
        ) : (
          <ConcernEditor
            value={content}
            content={content}
            onChange={setContent}
            ref={editorRef}
          />
        )}
      </Container>
    </>
  );
};
export default CommunityRegistPage;
