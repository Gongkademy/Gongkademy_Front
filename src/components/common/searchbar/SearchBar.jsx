import {
  SearchBarContainer,
  StyledSearchBar,
} from "./Searchbar.style";
import {
  useState,
  useEffect,
  useRef,
} from "react";
import Select from "@components/common/select/Select";
import useCommonStore from "@stores/common/CommonStore";
import { useNavigate } from "react-router-dom";
const SearchBar = ({
  link,
  search,
  type,
  setPageNo,
}) => {
  const ref = useRef(null);
  const [selected, setSelected] =
    useState("최신순");
  const [
    pendingNavigation,
    setPendingNavigation,
  ] = useState(false);
  const navigate = useNavigate();
  const searchOptions = {
    최신순: "createTime",
    조회수순: "hit",
    스크랩순: "scrapCount",
    좋아요순: "likeCount",
  };
  const { keyword, setKeyword, criteria } =
    useCommonStore();
  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.nativeEvent.isComposing
    ) {
      setPendingNavigation(true);
      e.preventDefault();
      search(keyword, criteria);
      setPageNo(1);
    }
  };
  useEffect(() => {
    search(keyword, criteria);
    setPageNo(1);
  }, [criteria]);
  useEffect(() => {
    if (pendingNavigation) {
      navigate(link);
      setPendingNavigation(false);
    }
  }, [pendingNavigation, navigate, link]);

  return (
    <SearchBarContainer>
      <StyledSearchBar
        placeholder="제목, 내용을 입력해주세요"
        onKeyDown={handleKeyDown}
        ref={ref}
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
      />
      <Select
        options={Object.keys(searchOptions)}
        selectedValue={selected}
        setSelectedValue={setSelected}
        width={"6rem"}
        link={link}
      />
    </SearchBarContainer>
  );
};
export default SearchBar;
