// Check User
export const CheckAccount = (user) => {
  return user === "المشرف" || user === "الفني" || user === "الاستقبال"
    ? true
    : false;
};

// Control User / Default Links
export const DefaultLinks = (user) => {
  if (CheckAccount(user)) {
    return user === "الاستقبال"
      ? "/dashboard/فواتير"
      : user === "الفني"
      ? "/dashboard/قائمة-الكروت"
      : user === "المشرف"
      ? "/dashboard/الرئيسية"
      : "/login";
  } else {
    return "/login";
  }
};
export const WhatThisAccount = (user) => {
  if (CheckAccount(user)) {
    return user === "الاستقبال"
      ? "الاستقبال"
      : user === "الفني"
      ? "الفني"
      : user === "المشرف"
      ? "المشرف"
      : "/login";
  } else {
    return "";
  }
};
