// Import Lib
import React, { useState, createContext } from "react";
export const DataContext = createContext();

export function DataProider(props) {
  // use State
  const [stateSide, setStateSide] = useState(false);
  const [user, setUser] = useState("المشرف");

  // Cards
  const [cards, setCards] = useState([]);
  const handleCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <DataContext.Provider
      value={{ cards, handleCard, stateSide, setStateSide, user, setUser }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
