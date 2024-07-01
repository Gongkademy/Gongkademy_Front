import {
  SearchBarContainer,
  StyledSearchBar,
} from "./Searchbar.style";
import { useState } from "react";
import Select from "@components/common/select/Select";
import useCommonStore from "@/stores/common/CommonStore";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ link }) => {
  const [selected, setSelected] =
    useState("최신순");
  const navigate = useNavigate();
  const searchOptions = [
    "최신순",
    "조회수순",
    "댓글순",
    "좋아요순",
  ];
  const { keyword, setKeyword } =
    useCommonStore();
  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      e.nativeEvent.isComposing === false
    ) {
      setKeyword(e.target.value);
      navigate(link);
    }
  };
  return (
    <SearchBarContainer>
      <StyledSearchBar
        placeholder="제목, 내용을 입력해주세요"
        onKeyDown={handleKeyDown}
      ></StyledSearchBar>
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
