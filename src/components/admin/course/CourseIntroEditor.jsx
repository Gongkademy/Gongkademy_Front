import QuillEditor from "@components/common/editor/QuillEditor";

const CourseIntroEditor = ({ content, onChange, ref }) => {
  return (
    <QuillEditor image={true} content={content} onChange={onChange} ref={ref} />
  );
};

export default CourseIntroEditor;
