// Import From NPM
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

// Impoer Pages
import Home from "./Components/Parents/Home/Home";
import Login from "./Components/Parents/Login/Login";
import Form_invoices from "./Components/Parents/Form_invoices/Form_invoices";
import Invoices from "./Components/Parents/Invoices/Invoices";
import Cards from "./Components/Parents/Cards/Cards";
import Steps from "./Components/Parents/Steps/Steps";
import Staff from "./Components/Parents/Staff/Staff";
import Users from "./Components/Parents/Users/Users";
import Web_Setting from "./Components/Parents/Web_setting/Web_Setting";

// Import Style
import "./Style/all.scss";

// Get Data From Context
import { DataProider } from "./DataContext";
import Sidebar from "./Components/Childe/General-components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState("");
  function Trans() {
    const history = useHistory();
    if (users === "الاستقبال") {
      history.push("/dashboard/فواتير");
    } else if (users === "الفني") {
      history.push("/dashboard/قائمة-الكروت");
    } else if (users === "المشرف") {
      history.push("/dashboard/الرئيسية");
    } else {
      history.push("/dashboard/الرئيسية");
    }
    return <></>;
  }
  return (
    <DataProider>
      <Router>
        <Switch>
          {/* المشرف*/}
          <Route path="/dashboard/الرئيسية" exact>
            <Home user={users} />
          </Route>
          <Route path="/dashboard/موظفين" exact>
            <Staff user={users} />
          </Route>
          <Route path="/dashboard/حسابات" exact>
            <Users user={users} />
          </Route>
          <Route path="/dashboard/اعدادات" exact>
            <Web_Setting user={users} />
          </Route>

          {/* Trans To Home Page */}
          <Route path="/" component={Trans} exact />

          {/* الاستقبال */}

          <Route path="/dashboard/فواتير" exact>
            <Invoices user={users} />
          </Route>

          <Route path="/dashboard/انشاء/فواتير" exact>
            <Form_invoices user={users} />
          </Route>

          {/* الفني */}
          <Route path="/dashboard/قائمة-الكروت" exact>
            <Cards user={users} />
          </Route>

          <Route path="/dashboard/قائمة-الكروت/:id" exact>
            <Steps user={users} />
          </Route>

          {/* عام */}
          <Route path="/login" exact>
            <Login setUsers={setUsers} users={users} />
          </Route>
        </Switch>
      </Router>
    </DataProider>
  );
}

export default App;
