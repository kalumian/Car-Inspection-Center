import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Table_Admin from "../../Childe/Staff-Components/Table_Admin";
import Table_Reception from "../../Childe/Staff-Components/Table_Reception";
import Table_Technician from "../../Childe/Staff-Components/Table_Technician";
import Table from "../../Childe/Staff-Components/Table";

function Staff({ user }) {
  const Content = () => {
    return (
      <>
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar user={user} />
          <div className="invoices">
            <Header user={user} />
            <div className="d-flex justify-content-center flex-column staff">
              <h2 className="text-center mt-3 mb-1">قائمة الموظفين</h2>
              <Table Contents={Table_Admin} title="المشرفين" />
              <Table Contents={Table_Reception} title="الاستقبال" />
              <Table Contents={Table_Technician} title="الفنيين" />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {user.type === "الاستقبال" || user.type === "المشرف" ? (
        <Content />
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
  // Content
}

export default Staff;
