import ReactQuill from "react-quill";
import { useMemo, useRef } from "react";
import { uploadImage } from "@apis/common/imageApi";
import Button from "@components/common/button/Button";

function CourseEditor({ onChange, width, height, value }) {
  const quillRef = useRef(null);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async (e) => {
      const file = input.files?.[0];
      try {
        const response = await uploadImage({
          file: file,
          categ: "COURSEINTRO",
        });
        const IMG_URL = response.data;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
        editor.setContents("aa");
      } catch (error) {
        console.log(error);
      }
    });
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      style={{ width: width, height: height }}
      image={true}
      modules={modules}
      value={value}
      onChange={onChange}
    />
  );
}

export default CourseEditor;
