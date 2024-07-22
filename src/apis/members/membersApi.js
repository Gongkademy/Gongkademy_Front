import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
import { PATH } from "@router/Constants";

//사용중
export const join = async (data) => {
  try {
    const response = await axiosInstance.post(END_POINT.MEMBERS, data);
    console.log(response.status);
    if (response.status === 201) {
      location.href = PATH.ROOT;
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(END_POINT.LOGOUT);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 보류중
export const validateDuplicateNickname = (nickname) => {
  return axiosInstance.get(`/check-nickname?nickname=${nickname}`);
};

export const validateDuplicateEmail = (email) => {
  return axiosInstance.get(`/check-email?email=${email}`);
};

export const sendEmail = (email) => {
  return axiosInstance.post("/mailSend", {
    email: email,
  });
};

export const checkAuthNum = (email, authNum) => {
  return axiosInstance.post("/mailauthCheck", {
    email: email,
    authNum: authNum,
  });
};

export const login = (username, password) => {
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  return axiosInstance.post(END_POINT.LOGIN, form, header);
};

export const getMemberInfo = (memberId) => {
  return axiosInstance.get(END_POINT.MEMBER(memberId));
};

export const deleteMember = (memberId) => {
  return axiosInstance.delete(END_POINT.MEMBER(memberId));
};

export const updateNickname = (memberId, newNickname) => {
  return axiosInstance.patch("/update-member", {
    memberId: memberId,
    newNickname: newNickname,
  });
};

export const updatePassword = (memberId, newPassword) => {
  return axiosInstance.patch("/update-password", {
    memberId: memberId,
    newPassword: newPassword,
  });
};
