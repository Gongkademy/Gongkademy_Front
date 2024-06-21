import { useState } from "react";
import { SelectContainer } from "./communityRegist.style";
import Button from "@components/common/button/Button";
import Select from "@components/common/searchbar/Select";
const RegistNav = ({ type }) => {
  const typeMap = {
    "Q&A": "🙋Q&A",
    concern: "🤔고민",
  };
  const [selected, setSelected] = useState(typeMap[type]);
  const options = ["🙋Q&A", "🤔고민"];
  return (
    <SelectContainer>
      <Select
        options={options}
        selectedValue={selected}
        setSelectedValue={setSelected}
        width={"7rem"}
      />
      <Button fill bold>
        등록하기
      </Button>
    </SelectContainer>
  );
};
export default RegistNav;
