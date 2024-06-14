import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote", "ul", "ol"],
  ["image"],
];

const ToastUIEditor = () => {
  return (
    <Editor
      initialEditType="wysiwyg"
      autofocus={false}
      toolbarItems={toolbar}
      hideModeSwitch
      height="500px"
    />
  );
};

export default ToastUIEditor;
