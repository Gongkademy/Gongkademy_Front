import {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Container,
  StyledInput,
} from "./CommunityRegistPage.style";
import RegistNav from "@components/community/Regist/RegistNav";
import RegistCourse from "@components/community/Regist/RegistCourse";
import QnaEditor from "@components/community/Regist/QnaEditor";
import useQnaStore from "@stores/Community/QnaStore";
import useConcernStore from "@stores/Community/ConcernStore";
import { PATH } from "@router/Constants";
import Modal from "react-modal";
import Alarm from "@components/common/modal/Alarm/Alarm";
import ConcernEditor from "@components/community/Regist/ConcernEditor";

const CommunityRegistPage = () => {
  const [isModalOpen, SetIsModalOpen] =
    useState(false);
  const closeModal = () => {
    SetIsModalOpen(false);
  };
  const { writeConcern } = useConcernStore();
  const { writeQna } = useQnaStore();
  const location = useLocation();
  const { type } = location.state || {
    type: "Q&A",
  };
  const typeMap = {
    "Q&A": "🙋Q&A",
    concern: "🤔고민",
  };
  const [selected, setSelected] = useState(
    typeMap[type]
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCourse, setSelectedCourse] =
    useState("강좌를 선택해주세요.");
  const [selectedLecture, setSelectedLecture] =
    useState("강의를 선택해주세요.");
  const editorRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    setTitle("");
  }, [selected]);
  const handleClickRegistButton = () => {
    setContent(
      editorRef.current.getEditor().root.innerHTML
    );
    SetIsModalOpen(true);
  };
  const handleClickButton = () => {
    if (selected === "🙋Q&A") {
      const board = {
        boardType: "QNA",
        memberId: "1",
        title: title,
        content: content,
        lectureTitle: selectedLecture,
        courseTitle: selectedCourse,
      };
      console.log(board);
      writeQna(board);
    } else {
      const board = {
        boardType: "CONSULT",
        memberId: 1,
        title: title,
        content: content,
      };
      console.log(board);
      writeConcern(board);
    }
    setTitle("");
    setSelectedCourse("강좌를 선택해주세요.");
    setSelectedLecture("강의를 선택해주세요.");
    navigate(
      PATH.COMMUNITY(
        selected === "🙋Q&A" ? "Q&A" : "concern"
      ) + `?keyword=&criteria=&pageNo=1`
    );
  };
  return (
    <>
      <Container>
        <RegistNav
          selected={selected}
          setSelected={setSelected}
          handleClickButton={
            handleClickRegistButton
          }
        />
        <StyledInput
          placeholder="핵심 내용을 요약해주세요."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        {selected == "🙋Q&A" && (
          <RegistCourse
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            selectedLecture={selectedLecture}
            setSelectedLecture={
              setSelectedLecture
            }
          />
        )}
        {selected == "🙋Q&A" ? (
          <QnaEditor
            content={content}
            onChange={setContent}
            ref={editorRef}
          />
        ) : (
          <ConcernEditor
            content={content}
            onChange={setContent}
            ref={editorRef}
          />
        )}
      </Container>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 10,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Alarm
          title="글을 등록하시겠습니까?"
          content={
            "커뮤니티 페이지로 이동합니다."
          }
          onClickOk={handleClickButton}
          onClickNo={closeModal}
        />
      </Modal>
    </>
  );
};
export default CommunityRegistPage;
