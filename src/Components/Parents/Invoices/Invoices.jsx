import Header from "../../Childe/General-components/Header/Header";
import Error_Page from "../Error_Page/Error_Page";

function Invoices({ user }) {
  const Content = () => {
    return (
      <div className="invoices">
        <Header user={user} />
        الفواتير
      </div>
    );
  };
  return <>{user === "الاستقبال" ? <Content /> : <Error_Page kind={400} />}</>;
}

export default Invoices;
