import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Form_lg from "../../Childe/Form_invoices-components/Form_lg";
import Form_sm from "../../Childe/Form_invoices-components/Form_sm";

import { useState, useContext } from "react";
import { DataContext } from "../../../DataContext";

function Form_invoices() {
  // Variables
  const user = "الاستقبال";
  const handle = useContext(DataContext);
  const init_input = {
    invoices_customer_name: "",
    invoices_customer_number: "",
    invoices_customer_email: "",
    invoices_customer_board_number: "",
    invoices_customer_board_name: "",
    invoices_speedometer: "",
    invoices_select_year: "",
    invoices_VIN: "",
  };
  const init_select = {
    selcet_crane: "",
    select_factory: "",
    select_type: "",
    motion_minutes: "",
  };

  // State
  const [input, setInput] = useState(init_input);
  const [select, setSelect] = useState(init_select);
  const [message, setMessage] = useState("");
  const [editPage, setEditPage] = useState(false);
  // Functions
  const handleInput = ({ target }) => {
    setMessage("");
    setInput({
      ...input,
      [target.id]: target.value,
    });
  };
  const handleSelect = ({ target }) => {
    setMessage("");

    setSelect({
      ...select,
      [target.id]: target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    const data = {
      ...input,
      ...select,
      date: 2021,
      state: 1,
      id: Math.random(),
    };
    const is_completed = Object.values(data)
      .map((i) => Boolean(i))
      .every((i) => i === true);

    is_completed ? handle.handleCard(data) : setMessage("error");
    is_completed ? setMessage("message") : setMessage("error");
    is_completed ? setInput(init_input) : setMessage("error");
    is_completed ? setSelect(init_select) : setMessage("error");
  };

  // Content
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        <Header user={user} />
        {user === "الاستقبال" ? (
          <>
            <Form_lg
              handleInput={handleInput}
              handleSelect={handleSelect}
              submit={submit}
              setMessage={setMessage}
              select={select}
              input={input}
              message={message}
              setEditPage={setEditPage}
              editPage={editPage}
            />

            <Form_sm
              handleInput={handleInput}
              handleSelect={handleSelect}
              submit={submit}
              setMessage={setMessage}
              select={select}
              input={input}
              message={message}
              setEditPage={setEditPage}
              editPage={editPage}
            />
          </>
        ) : (
          <Error_Page kind={400} />
        )}
      </div>
    </div>
  );
}

export default Form_invoices;
