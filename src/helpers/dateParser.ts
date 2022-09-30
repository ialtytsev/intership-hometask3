export const getDates = (content: string) => {
  const reg = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm;
  return content.match(reg)?.join(", ") || "";
};
