import { Flex } from "../flex/Flex";
import { StyledInput } from "./Input.style";
const Input = ({ label, onChange, placeholder, type, name }) => {
  return (
    <>
      <Flex as="label" direction="column" gap="0.5rem">
        {label && label}
        <StyledInput
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Flex>
    </>
  );
};

export default Input;
