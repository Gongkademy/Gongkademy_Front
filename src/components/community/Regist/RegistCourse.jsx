import { useState } from "react";
import { SelectContainer } from "./communityRegist.style";
import Select from "@components/common/select/Select";
const RegistCourse = ({
  selectedCourse,
  setSelectedCourse,
  selectedLecture,
  setSelectedLecture,
}) => {
  const courseOptions = [
    "강좌1",
    "강좌2",
    "강좌3",
    "강좌4",
    "강좌5",
  ];
  const lectureOptions = [
    "강의1",
    "강의2",
    "강의3",
    "강의4",
    "강의5",
  ];

  return (
    <SelectContainer>
      <Select
        options={courseOptions}
        selectedValue={selectedCourse}
        setSelectedValue={setSelectedCourse}
        width={"18.5rem"}
      />
      <Select
        options={lectureOptions}
        selectedValue={selectedLecture}
        setSelectedValue={setSelectedLecture}
        width={"18.5rem"}
      />
    </SelectContainer>
  );
};
export default RegistCourse;
