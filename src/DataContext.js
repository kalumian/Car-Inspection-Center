// Import Lib
import React, { useState, createContext } from "react";
import jwt from "jsonwebtoken";

// import Function
import { WhatThisAccount } from "./Function/UsersControl";

export const DataContext = createContext();

export function DataProider(props) {
  // use State
  const [stateSide, setStateSide] = useState(false);
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);

  // Function
  const handleCard = (card) => {
    setCards([...cards, card]);
  };
  const handleUser = (token) => {
    const data = jwt.decode(token);
    setUser({
      name: data.identity,
      type: WhatThisAccount(data.type),
      token: token,
    });
  };
  return (
    <DataContext.Provider
      value={{ cards, handleCard, stateSide, setStateSide, user, handleUser }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
