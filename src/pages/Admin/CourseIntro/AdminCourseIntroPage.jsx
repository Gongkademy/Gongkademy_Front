import CourseIntroEditor from "@components/admin/course/CourseIntroEditor";
import QuillEditor from "@components/common/editor/QuillEditor";
import { useState, useRef } from "react";
const AdminCourseIntroducePage = () => {
  const [content, setContent] = useState("");

  const editorRef = useRef(null);
  const handleClickRegistButton = () => {
    setContent(editorRef.current.getEditor().root.innerHTML);
    console.log(editorRef.current.getEditor().root.innerHTML);
  };
  return (
    <div>
      <button onClick={handleClickRegistButton}>등록버튼</button>
      <CourseIntroEditor
        image={true}
        content={content}
        onChange={setContent}
        ref={editorRef}
      />
    </div>
  );
};
export default AdminCourseIntroducePage;
