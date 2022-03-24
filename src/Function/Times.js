// Days Acrabic
export const days = [
  "الاحد",
  "الاثنين",
  "الثلاثاء",
  "الاربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

// Get To Day "Arabic"
export const GettoDayArabic = (time) => days[time.getDay()];

// Get This Hour
export const GetHours = (time) => {
  return (time.getHours() + 24) % 12 || 12;
};

// Get Minets
export const GetMin = (time) => {
  return time.getMinutes() === 0
    ? "00"
    : time.getMinutes() >= 10
    ? time.getMinutes()
    : "0" + time.getMinutes();
};

// Get From 1970 to Now : Years
export const getYears = () => {
  const res = [];
  const thisYears = new Date().getFullYear() + 2;
  for (let x = 1970; x < thisYears; x++) {
    res.push(x);
  }
  return res;
};

// Get Full Date "String"
export const GetFullDateString = () => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
};

// Get Full Date with hour and min "String"
export const GetFullDateStringWithHourAndMin = () => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`;
};
