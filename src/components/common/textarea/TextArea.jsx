import { TextAreaBlock } from "./TextArea.style";
const TextArea = ({ onChange, placeholder, value, ...rest }) => {
  return (
    <TextAreaBlock
      rows={3}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    ></TextAreaBlock>
  );
};

export default TextArea;
