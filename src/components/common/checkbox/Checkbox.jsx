import { Children } from "react";
import { StyledCheckboxInput, UnCheckedbox } from "./Checkbox.style";
import { CheckboxIcon } from "@assets/svg/icons";
import { Flex } from "../flex/Flex";
const Checkbox = ({ children, disabled, checked, onChange, name }) => {
  return (
    <Flex as="label" align="center" gap="0.5rem">
      {checked ? <CheckboxIcon width="20px" /> : <UnCheckedbox />}
      {children}
      <StyledCheckboxInput
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </Flex>
  );
};

export default Checkbox;
