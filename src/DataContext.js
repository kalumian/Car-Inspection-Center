// Import Lib
import React, { useState, createContext } from "react";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";
// import Function
import { WhatThisAccount } from "./Function/UsersControl";
import { useCookies , Cookies as cookies} from "react-cookie";

export const DataContext = createContext();

export function DataProider(props) {
  // use State
  const [stateSide, setStateSide] = useState(false);
  const [Cookies, setCookies , removeCookie] = useCookies(["name"]);
  // Function

  const handleCookies = (token) => {
    const data = jwt.decode(token);
    setCookies("name", data.name, { path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
    setCookies("type", data.type, { path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
    setCookies("token", token, { path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
  };
  const ClearCookies = () => {
    removeCookie("name",{ path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
    removeCookie("type",{ path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
    removeCookie("token",{ path: "/", maxAge: String(8 * 60 * 60) , sameSite:"strict"});
  };
  return (
    <DataContext.Provider
      value={{
        stateSide,
        setStateSide,
        Cookies,
        handleCookies,
        ClearCookies,
        removeCookie,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
