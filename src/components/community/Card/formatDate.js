export const formattedDate = (createTime) => {
  const date = new Date(createTime);
  return `${String(date.getFullYear()).slice(
    2
  )}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(date.getDate()).padStart(2, "0")}`;
};
