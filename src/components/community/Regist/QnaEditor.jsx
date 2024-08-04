import QuillEditor from "@components/common/editor/QuillEditor";
import { forwardRef } from "react";
import ReactQuill from "react-quill";

const QnaEditor = forwardRef(
  ({ content, onChange, value }, ref) => {
    return (
      <div style={{ width: "38rem" }}>
        <QuillEditor
          value={value}
          image={true}
          content={content}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default QnaEditor;
