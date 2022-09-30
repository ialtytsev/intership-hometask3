export const getDate = () => {
  const options = {
    month: "numeric",
    year: "numeric",
    day: "numeric",
  } as const;

  return new Date().toLocaleDateString("en-US", options);
};
