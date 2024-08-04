import QuillEditor from "@components/common/editor/QuillEditor";
import { forwardRef } from "react";
import ReactQuill from "react-quill";

const ConcernEditor = forwardRef(
  ({ content, onChange, value }, ref) => {
    return (
      <div style={{ width: "38rem" }}>
        <QuillEditor
          image={false}
          value={value}
          content={content}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default ConcernEditor;
