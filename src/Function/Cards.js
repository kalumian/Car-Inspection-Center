import { useContext } from "react";

// Handle Card From ContextData
export const DeleteBill = async (user, id) => {
  try {
    let res = await fetch(
      "https://peaceful-depths-13311.herokuapp.com/finsh-card",
      {
        method: "PATCH",
        body: JSON.stringify({ id: 26 }),
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": user.token,
        },
      }
    );
    let resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.log(err);
    console.log(user);
    console.log(typeof id);
  }
};
export const FinishBill = async (id, user) => {
  console.log(user.token);
  try {
    let res = await fetch(
      "https://peaceful-depths-13311.herokuapp.com/finsh-card",
      {
        method: "PATCH",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": user.token,
        },
      }
    );
    let resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.log(err);
  }
};
