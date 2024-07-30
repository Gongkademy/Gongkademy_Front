import { StyledTextbox } from "@components/common/textbox/Textbox.style";
const Textbox = ({ children, height, ...rest }) => {
  return (
    <StyledTextbox height={height} {...rest}>
      {children}
    </StyledTextbox>
  );
};

export default Textbox;
