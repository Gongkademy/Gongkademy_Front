import {
  SearchBarContainer,
  StyledSearchBar,
} from "./Searchbar.style";
import { useState } from "react";
import Select from "./Select";
const SearchBar = () => {
  const [selected, setSelected] =
    useState("최신순");
  const searchOptions = [
    "최신순",
    "조회수순",
    "댓글순",
    "좋아요순",
  ];
  return (
    <SearchBarContainer>
      <StyledSearchBar placeholder="제목, 내용을 입력해주세요"></StyledSearchBar>
      <Select
        options={searchOptions}
        selectedValue={selected}
        setSelectedValue={setSelected}
        width={"6rem"}
      />
    </SearchBarContainer>
  );
};
export default SearchBar;
