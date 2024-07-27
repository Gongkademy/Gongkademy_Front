import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

//사용중
export const save = async (data) => {
  return await axiosInstance.post(END_POINT.MEMBER, data);
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(END_POINT.LOGOUT);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getMemberInfo = async () => {
  return await axiosInstance.get(END_POINT.MEMBER);
};

export const checkMemberRole = (memberRole) => {
  return axiosInstance.get(END_POINT.CHECK_MEMBER_ROLE(memberRole));
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

export const deleteMember = (memberId) => {
  return axiosInstance.delete(END_POINT.MEMBER_DETAIL(memberId));
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
