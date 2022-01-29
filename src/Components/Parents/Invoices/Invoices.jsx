// Import Components
import Header from "../../Childe/General-components/Header/Header";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Table from "../../Childe/Invoices-components/Table";
import Form from "../../Childe/Invoices-components/Form";
import Error_Page from "../Error_Page/Error_Page";

// Import Functions
import { WhatThisAccount } from "../../../Function/UsersControl";

function Invoices({ user }) {
  const Content = () => {
    return (
      <>
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar user={user} />
          <div className="invoices">
            <Header user={user} />
            <h2 className="text-center mt-4 ">قائمة الفواتير</h2>
            <Form user={user} />
            <Table />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {WhatThisAccount(user) === "الاستقبال" ||
      WhatThisAccount(user) === "المشرف" ? (
        <Content />
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Invoices;
