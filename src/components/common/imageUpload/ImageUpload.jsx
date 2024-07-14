import { useState } from "react";
import { ImageLabel, Thumnail } from "./ImageUpload.style";

const ImageUpload = ({ width, height, onChange }) => {
  const [preview, setPreview] = useState();
  const handleImageInputChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    onChange(e.target.files[0]);

    reader.onload = () => {
      const data = reader.result;
      setPreview(data);
      e.target.value = "";
    };
  };

  return (
    <div>
      <ImageLabel width={width} height={height}>
        {preview ? (
          <Thumnail src={preview} width={width} height={height} />
        ) : (
          <div>강좌 대표이미지 등록하기</div>
        )}
        <input onChange={handleImageInputChange} type="file" accept="image/*" />
      </ImageLabel>
    </div>
  );
};

export default ImageUpload;
