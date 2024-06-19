import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";
const QnaEditor = () => {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task"],
    ["table", "image", "link"],
  ];
  return (
    <div style={{ width: "38rem" }}>
      <Editor
        initialValue={" "}
        placeholder={"작성해줘."}
        initialEditType="wysiwyg"
        autofocus={true}
        toolbarItems={toolbarItems}
        hideModeSwitch
        height="500px"
        value=""
      />
    </div>
  );
};

export default QnaEditor;
