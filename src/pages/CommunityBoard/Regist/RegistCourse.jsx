import {
  StyledSelect,
  Selected,
  SelectedValue,
  Arrow,
  Options,
  Option,
} from "@components/common/searchbar/Searchbar.style";
import { useState } from "react";
import {
  Container,
  SelectContainer,
} from "./Regist.style";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@/assets/svg/icons";
import Button from "@components/common/button/Button";
const RegistNav = ({ type }) => {
  const typeMap = {
    "Q&A": "🙋Q&A",
    concern: "🤔고민",
  };
  const [selectedCourse, setSelectedCourse] =
    useState("강좌를 선택해주세요.");
  const [selectedLecture, setSelectedLecture] =
    useState("강의를 선택해주세요.");
  const [
    showCourseOptions,
    setShowCourseOptions,
  ] = useState(false);
  const [
    showLectureOptions,
    setShowLectureOptions,
  ] = useState(false);
  const handleClickCourseOptions = () => {
    setShowCourseOptions(!showCourseOptions);
  };
  const handleClickLectureOptions = () => {
    setShowLectureOptions(!showLectureOptions);
  };
  const handleCourseOptionClick = (option) => {
    setSelectedCourse(option);
    setShowCourseOptions(false);
  };
  const handleLectureOptionClick = (option) => {
    setSelectedLecture(option);
    setShowLectureOptions(false);
  };
  return (
    <SelectContainer>
      <StyledSelect>
        <Selected
          onClick={handleClickCourseOptions}
        >
          <SelectedValue>
            {selectedCourse}
          </SelectedValue>
          <Arrow>
            {showCourseOptions ? (
              <ChevronUpIcon
                width="16"
                height="12"
                class="bi bi-chevron-up"
              />
            ) : (
              <ChevronDownIcon
                width="16"
                height="12"
                class="bi bi-chevron-down"
              />
            )}
          </Arrow>
        </Selected>
        <Options active={showCourseOptions}>
          <Option
            onClick={() =>
              handleCourseOptionClick("🙋Q&A")
            }
          >
            🙋Q&A
          </Option>
          <Option
            onClick={() =>
              handleCourseOptionClick("🤔고민")
            }
          >
            🤔고민
          </Option>
        </Options>
      </StyledSelect>
      <StyledSelect>
        <Selected
          onClick={handleClickLectureOptions}
        >
          <SelectedValue>
            {selectedLecture}
          </SelectedValue>
          <Arrow>
            {showLectureOptions ? (
              <ChevronUpIcon
                width="16"
                height="12"
                class="bi bi-chevron-up"
              />
            ) : (
              <ChevronDownIcon
                width="16"
                height="12"
                class="bi bi-chevron-down"
              />
            )}
          </Arrow>
        </Selected>
        <Options active={showLectureOptions}>
          <Option
            onClick={() =>
              handleLectureOptionClick("🙋Q&A")
            }
          >
            🙋Q&A
          </Option>
          <Option
            onClick={() =>
              handleLectureOptionClick("🤔고민")
            }
          >
            🤔고민
          </Option>
        </Options>
      </StyledSelect>
    </SelectContainer>
  );
};
export default RegistNav;
