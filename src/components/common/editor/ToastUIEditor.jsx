import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote"],
  ["ul", "ol", "task"],
  ["table", "image", "link"],
];

const ToastUIEditor = () => {
  return (
    <Editor
      initialValue={"작성해주세요."}
      placeholder={"작성해줘."}
      initialEditType="wysiwyg"
      autofocus={true}
      toolbarItems={toolbarItems}
      hideModeSwitch
      height="500px"
      value=""
    />
  );
};

export default ToastUIEditor;
