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

// Import Style
import "./Style/all.scss";

// Get Data From Context
import { DataProider } from "./DataContext";
import Sidebar from "./Components/Childe/General-components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState("");
  function Trans() {
    console.log(users);
    const history = useHistory();
    if (users === "الاستقبال") {
      history.push("/dashboard/فواتير");
    } else if (users === "الفني") {
      history.push("/dashboard/قائمة-الكروت");
    } else {
      history.push("/dashboard");
    }
    return <></>;
  }
  return (
    <DataProider>
      <Router>
        <Switch>
          {/* المشرف*/}
          <Route path="/dashboard" exact>
            <Home user={users} />
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
