import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@/assets/svg/icons";
import {
  StyledSelect,
  Selected,
  SelectedValue,
  Options,
  Option,
} from "./Select.style";

const Select = ({ options, selectedValue, setSelectedValue, width }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const handleClickOptions = () => {
    setIsShowOptions(!isShowOptions);
  };
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsShowOptions(false);
  };
  return (
    <StyledSelect style={{ width }}>
      <Selected onClick={handleClickOptions}>
        <SelectedValue>{selectedValue}</SelectedValue>
        {isShowOptions ? (
          <ChevronUpIcon width="16" height="12" class="bi bi-chevron-up" />
        ) : (
          <ChevronDownIcon width="16" height="12" class="bi bi-chevron-down" />
        )}
      </Selected>
      {}
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
