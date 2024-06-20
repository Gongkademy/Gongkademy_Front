import { TextAreaBlock } from "./TextArea.style";
const TextArea = ({ onChange, placeholder }) => {
  return (
    <TextAreaBlock
      rows={3}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    ></TextAreaBlock>
  );
};

export default TextArea;
