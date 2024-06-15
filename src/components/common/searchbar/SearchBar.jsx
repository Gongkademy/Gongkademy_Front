import {
  SearchBarContainer,
  StyledSearchBar,
  StyledSelect,
  Selected,
  SelectedValue,
  Arrow,
  Options,
  Option,
} from "./Searchbar.style";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@/assets/svg/icons";
const SearchBar = () => {
  const [selected, setSelected] = useState("최신순");
  const [showOptions, setShowOptions] = useState(false);
  const handleClickOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (option) => {
    setSelected(option);
    setShowOptions(false);
  };
  return (
    <SearchBarContainer>
      <StyledSearchBar placeholder="제목, 내용을 입력해주세요"></StyledSearchBar>
      <StyledSelect>
        <Selected onClick={handleClickOptions}>
          <SelectedValue>{selected}</SelectedValue>
          <Arrow>
            {showOptions ? (
              <ChevronUpIcon width="16" height="12" class="bi bi-chevron-up" />
            ) : (
              <ChevronDownIcon
                width="16"
                height="12"
                class="bi bi-chevron-down"
              />
            )}
          </Arrow>
        </Selected>
        <Options active={showOptions}>
          <Option onClick={() => handleOptionClick("최신순")}>최신순</Option>
          <Option onClick={() => handleOptionClick("조회수순")}>
            조회수순
          </Option>
          <Option onClick={() => handleOptionClick("댓글순")}>댓글순</Option>
          <Option onClick={() => handleOptionClick("좋아요순")}>
            좋아요순
          </Option>
        </Options>
      </StyledSelect>
    </SearchBarContainer>
  );
};
export default SearchBar;
