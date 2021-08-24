import Error_Page from "../Error_Page/Error_Page";

function Invoices({ user }) {
  const Content = () => {
    return <div className="invoices">الفواتير</div>;
  };
  return <>{user === "الاستقبال" ? <Content /> : <Error_Page kind={400} />}</>;
}

export default Invoices;
