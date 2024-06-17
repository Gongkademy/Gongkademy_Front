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
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@/assets/svg/icons";
const Select = ({
  options,
  selectedValue,
  setSelectedValue,
  width,
}) => {
  const [showOptions, setShowOptions] =
    useState(false);
  const handleClickOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setShowOptions(false);
  };
  return (
    <StyledSelect style={{ width }}>
      <Selected onClick={handleClickOptions}>
        <SelectedValue>
          {selectedValue}
        </SelectedValue>
        <Arrow>
          {showOptions ? (
            <ChevronUpIcon
              width="16"
              height="12"
              class="bi bi-chevron-up"
            />
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
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={() =>
              handleOptionClick(option)
            }
          >
            {option}
          </Option>
        ))}
      </Options>
    </StyledSelect>
  );
};
export default Select;
