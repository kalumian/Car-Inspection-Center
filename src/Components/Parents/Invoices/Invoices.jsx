import Header from "../../Childe/General-components/Header/Header";
import Table from "../../Childe/Invoices-components/Table";
import Form from "../../Childe/Invoices-components/Form";
import Error_Page from "../Error_Page/Error_Page";
function Invoices({ user }) {
  const Content = () => {
    return (
      <div className="invoices">
        <Header user={user} />
        <h2 className="text-center mt-4 ">قائمة الفواتير</h2>
        <Form />
        <Table />
      </div>
    );
  };
  return <>{user === "الاستقبال" ? <Content /> : <Error_Page kind={400} />}</>;
}

export default Invoices;
