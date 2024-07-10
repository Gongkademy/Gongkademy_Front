import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  StyledInput,
} from "./CommunityRegistPage.style";
import RegistNav from "@components/community/Regist/RegistNav";
import RegistCourse from "@components/community/Regist/RegistCourse";
import ToastQna from "@components/community/Regist/ToastQna";
import useQnaStore from "@/stores/Community/QnaStore";
import useConcernStore from "@/stores/Community/ConcernStore";
const CommunityRegistPage = () => {
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
  const [selectedCourse, setSelectedCourse] =
    useState("강좌를 선택해주세요.");
  const [selectedLecture, setSelectedLecture] =
    useState("강의를 선택해주세요.");
  useEffect(() => {
    setTitle("");
  }, [selected]);
  const handleClickButton = () => {
    if (selected === "🙋Q&A") {
      const board = {
        boardType: "QNA",
        memberId: "kht",
        title: title,
        content: "Test 게시물1 내용",
        lectureTitle: selectedLecture,
        courseTitle: selectedCourse,
      };
      console.log(board);
      writeQna({
        boardType: "QNA",
        memberId: "kht",
        title: title,
        content: "Test 게시물1 내용",
        lectureTitle: selectedLecture,
        courseTitle: selectedCourse,
      });
    } else {
      const board = {
        boardType: "consulting",
        memberId: 1,
        title: title,
        content: "Test 게시물1 내용",
      };
      console.log(board);
      writeConcern(board);
    }
    setTitle("");
    setSelectedCourse("강좌를 선택해주세요.");
    setSelectedLecture("강의를 선택해주세요.");
  };
  return (
    <Container>
      <RegistNav
        selected={selected}
        setSelected={setSelected}
        handleClickButton={handleClickButton}
      />
      <StyledInput
        placeholder="핵심 내용을 요약해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {selected == "🙋Q&A" && (
        <RegistCourse
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          selectedLecture={selectedLecture}
          setSelectedLecture={setSelectedLecture}
        />
      )}
      <ToastQna />
    </Container>
  );
};
export default CommunityRegistPage;
