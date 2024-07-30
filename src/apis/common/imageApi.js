import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

export const uploadImage = async (data) => {
  const formData = new FormData();
  formData.append("categ", data.categ);
  formData.append("file", data.file);
  return await axiosInstance.post(END_POINT.FILE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
