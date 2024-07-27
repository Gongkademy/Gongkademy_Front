import { Flex } from "../flex/Flex";
import { StyledInput } from "./Input.style";
import Text from "@components/common/text/Text";
import { typo } from "@styles/style";
const Input = ({ label, ...props }) => {
  return (
    <>
      <Flex as="label" direction="column" gap="0.5rem">
        {label && <Text typo={typo.bodySm700}>{label}</Text>}
        <StyledInput {...props} />
      </Flex>
    </>
  );
};

export default Input;
