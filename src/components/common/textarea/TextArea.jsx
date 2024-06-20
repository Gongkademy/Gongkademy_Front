import { TextAreaBlock } from "./TextArea.style";
const TextArea = ({ onChange, placeholder }) => {
  return (
    <TextAreaBlock
      rows={3}
      placeholder={placeholder}
      onChange={onChange}
    ></TextAreaBlock>
  );
};

export default TextArea;
