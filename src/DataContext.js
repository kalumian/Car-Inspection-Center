import React, { useState } from "react";

export const DataContext = React.createContext();
export function DataProider(props) {
  const [cards, setCards] = useState([
    {
      date_s: "01/2021/10 ",
      id: 0.04525579248558831,
      invoices_VIN: "xzcxzc",
      invoices_customer_board_name: "س ا ي ر",
      invoices_customer_board_number: "2124",
      invoices_customer_email: "tradation10@gmail.com",
      invoices_customer_name: "فيصل عبد الرحمن",
      invoices_customer_number: "0577201728",
      invoices_notes: "123213",
      invoices_select_year: "2021-09-21",
      invoices_speedometer: "124235134",
      motion_minutes: "1",
      selcet_crane: "2",
      select_factory: "2",
      select_source: "2",
      select_type: "2",
      state: 1,
      date_f: "--",
    },
  ]);
  const handleCard = (card) => {
    setCards([...cards, card]);
  };
  return (
    <DataContext.Provider value={{ cards, handleCard }}>
      {props.children}
    </DataContext.Provider>
  );
}
