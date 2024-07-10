import { useEffect, useState } from "react";
import { SelectContainer } from "./communityRegist.style";
import Button from "@components/common/button/Button";
import Select from "@components/common/select/Select";
const RegistNav = ({
  selected,
  setSelected,
  handleClickButton,
}) => {
  const options = ["🙋Q&A", "🤔고민"];
  return (
    <SelectContainer>
      <Select
        options={options}
        selectedValue={selected}
        setSelectedValue={setSelected}
        width={"7rem"}
      />
      <Button
        fill
        bold
        onClick={handleClickButton}
      >
        등록하기
      </Button>
    </SelectContainer>
  );
};
export default RegistNav;
