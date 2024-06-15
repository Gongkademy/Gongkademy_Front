import {
  StyledSelect,
  Selected,
  SelectedValue,
  Arrow,
  Options,
  Option,
} from "@components/common/searchbar/Searchbar.style";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  SelectContainer,
} from "./Regist.style";
import {
  ChevronUp,
  ChevronDown,
} from "@/assets/svg/icons";
import Button from "@components/common/button/Button";
const Regist = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
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
  const [showOptions, setShowOptions] =
    useState(false);
  const handleClickOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (option) => {
    setSelected(option);
    setShowOptions(false);
  };
  return (
    <Container>
      <SelectContainer>
        <StyledSelect>
          <Selected onClick={handleClickOptions}>
            <SelectedValue>
              {selected}
            </SelectedValue>
            <Arrow>
              {showOptions ? (
                <ChevronUp
                  width="16"
                  height="12"
                  class="bi bi-chevron-up"
                />
              ) : (
                <ChevronDown
                  width="16"
                  height="12"
                  class="bi bi-chevron-down"
                />
              )}
            </Arrow>
          </Selected>
          <Options active={showOptions}>
            <Option
              onClick={() =>
                handleOptionClick("🙋Q&A")
              }
            >
              🙋Q&A
            </Option>
            <Option
              onClick={() =>
                handleOptionClick("🤔고민")
              }
            >
              🤔고민
            </Option>
          </Options>
        </StyledSelect>
        <Button fill bold>
          등록하기
        </Button>
      </SelectContainer>
    </Container>
  );
};
export default Regist;
