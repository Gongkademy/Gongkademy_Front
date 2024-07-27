import { useEffect, useState } from "react";
import {
  Preview,
  ProfileLabel,
} from "@components/common/profile/Profile.style";

const Profile = ({ width, height, onChange }) => {
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

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <ProfileLabel width={width} height={height}>
      {preview ? (
        <Preview src={preview} width={width} height={height} />
      ) : (
        <img src="" alt="기본프로필" width={width} height={height} />
      )}
      <input onChange={handleImageInputChange} type="file" accept="image/*" />
    </ProfileLabel>
  );
};

export default Profile;
