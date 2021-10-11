export const getYears = () => {
  const res = [];
  const thisYears = new Date().getFullYear() + 2;
  for (let x = 1970; x < thisYears; x++) {
    res.push(x);
  }
  return res;
};
