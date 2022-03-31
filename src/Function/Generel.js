import { WhatThisAccount } from "./UsersControl";
import jwt from "jsonwebtoken";
export const Notification = async (user, str) => {
  try {
    let res = await fetch(
      "https://peaceful-depths-13311.herokuapp.com/add-lite",
      {
        method: "PATCH",
        body: JSON.stringify({ str }),
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": user.token,
        },
      }
    );
    let resJson = await res.json();
    console.log(str);
    console.log(resJson);
  } catch (err) {
    console.log(err);
    console.log({ str });
  }
};

export const GetUser = () => {
  const Cookie = document.cookie;
  if (Cookie) {
    const getUser = Cookie.split(";").map((i) => i.split("="));
    const data = jwt.decode(getUser[2][1]);

    const user = {
      name: data.name,
      type: WhatThisAccount(getUser[1][1]),
      token: getUser[2][1],
    };
    return user;
  } else {
    return { name: "", type: "", token: "" };
  }
};
