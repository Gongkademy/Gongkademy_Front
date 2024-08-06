import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@assets/svg/icons";
import useCommonStore from "@stores/common/CommonStore";
import {
  StyledSelect,
  Selected,
  SelectedValue,
  Options,
  Option,
} from "./Select.style";
import { useNavigate } from "react-router-dom";

const Select = ({ options, selectedValue, setSelectedValue, width, link }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(false);
  const { setCriteria } = useCommonStore();
  const navigate = useNavigate();

  const handleClickOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    switch (option) {
      case "최신순":
        setCriteria("createTime");
        break;
      case "조회수순":
        setCriteria("hit");
        break;
      case "스크랩순":
        setCriteria("scrapCount");
        break;
      case "좋아요순":
        setCriteria("likeCount");
        break;
    }
    setIsShowOptions(false);
    setPendingNavigation(true);
  };
  useEffect(() => {
    if (pendingNavigation) {
      navigate(link);
      setPendingNavigation(false);
    }
  }, [pendingNavigation, navigate, link]);
  return (
    <StyledSelect style={{ width }}>
      <Selected onClick={handleClickOptions}>
        <SelectedValue>{selectedValue}</SelectedValue>
        {isShowOptions ? (
          <ChevronUpIcon width="16" height="12" className="bi bi-chevron-up" />
        ) : (
          <ChevronDownIcon
            width="16"
            height="12"
            className="bi bi-chevron-down"
          />
        )}
      </Selected>
      <Options active={isShowOptions} style={{ width }}>
        {options.map((option, index) => (
          <Option key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </Options>
    </StyledSelect>
  );
};
export default Select;
