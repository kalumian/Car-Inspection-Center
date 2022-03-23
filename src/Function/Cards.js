import { useContext } from "react";

// Handle Card From ContextData
export const DeleteBill = async (user, id) => {
  try {
    let res = await fetch(
      "https://peaceful-depths-13311.herokuapp.com/finsh-card",
      {
        method: "PATCH",
        body: JSON.stringify({id}),
        headers: {
          "Content-Type": "application/json",
          "x-access-tokens": user.token,
        },
      }
    );
    let resJson = await res.json();
    console.log(resJson);
    console.log(user);
    console.log(id);
  } catch (err) {
    console.log(err);
    console.log(user);
    console.log(id);
  }
};
