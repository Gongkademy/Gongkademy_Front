import { StyledTextbox } from "@components/common/textbox/Textbox.style";
const Textbox = ({ children, height, width, ...rest }) => {
  return (
    <StyledTextbox width={width} height={height} {...rest}>
      {children}
    </StyledTextbox>
  );
};

export default Textbox;
