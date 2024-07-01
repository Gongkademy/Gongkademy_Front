import { StyledText } from "./Text.style";

const Text = ({ children, typo, color }) => {
  return (
    <StyledText color={color} typo={typo}>
      {children}
    </StyledText>
  );
};

export default Text;
