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

  // Function

  const handleUser = (token) => {
    const data = jwt.decode(token);
    setUser({
      name: data.name,
      type: WhatThisAccount(data.type),
      token,
    });
  };
  return (
    <DataContext.Provider
      value={{
        stateSide,
        setStateSide,
        user,
        handleUser,
        setUser,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
