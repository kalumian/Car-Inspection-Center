// Check User
export const CheckAccount = (user) => {
  return user === "المشرف" || user === "الفني" || user === "الاستقبال"
    ? true
    : false;
};

// Control User / Default Links
export const DefaultLinks = (user) => {
  const Type = user.user.type;
  if (CheckAccount(Type)) {
    return Type === "الاستقبال"
      ? "/dashboard/فواتير"
      : Type === "الفني"
      ? "/dashboard/قائمة-الكروت"
      : Type === "المشرف"
      ? "/dashboard/الرئيسية"
      : "/loign";
  } else {
    return "/login";
  }
};

export const WhatThisAccount = (user) => {
  return user === "Reception"
    ? "الاستقبال"
    : user === "fitter"
    ? "الفني"
    : user === "SuperVisor"
    ? "المشرف"
    : "";
};
