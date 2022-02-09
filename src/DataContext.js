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
  const [cards, setCards] = useState([
    {
      invoices_customer_VIN: "ds123a",
      invoices_customer_board_letters: "يسيب",
      invoices_customer_board_number: "1242",
      invoices_customer_cost: "300",
      invoices_customer_crane: "3213",
      invoices_customer_email: "RooseveltVLieberman@dayrep.com",
      invoices_customer_factor: "11",
      invoices_customer_factory: "11",
      invoices_customer_final_cost: "150",
      invoices_customer_name: "محمد الفيصلي",
      invoices_customer_number: "0876534575",
      invoices_customer_service: "فحص جزئي",
      invoices_customer_speedometer: "11",
      invoices_customer_year: "1987",
      invoices_notes: "كرت اختبار",
    },
  ]);

  // Function

  const handleCard = (card) => {
    setCards([...cards, card]);
  };
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
        cards,
        handleCard,
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
