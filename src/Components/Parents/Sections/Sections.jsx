// Import From NPM
import { useLocation } from "react-router-dom";

// Import Components
import Invoices from "../Invoices/Invoices";
import Cards from "../Cards/Cards";
import Sidebar from "../../Childe/General-components/Sidebar-components/Sidebar";
import Error_Page from "../Error_Page/Error_Page";

function Sections({ user }) {
  const sections = ["الفواتير", "الكروت", "الموظفين"];
  const location = useLocation();
  const section = location.pathname.split("/")[2];
  console.log(section);
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        {section === sections[2] ? (
          <>موظفين</>
        ) : section === sections[1] ? (
          <Cards user={user} />
        ) : section === sections[0] ? (
          <Invoices user={user} />
        ) : (
          <Error_Page kind={404} />
        )}
      </div>
    </div>
  );
}

export default Sections;
