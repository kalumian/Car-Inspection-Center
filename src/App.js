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

function App() {
  const user = "الفني";
  function Trans() {
    const history = useHistory();
    if (user === "الاستقبال") {
      history.push("/dashboard/فواتير");
    } else if (user === "الفني") {
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
            <Home user={user} />
          </Route>

          {/* Trans To Home Page */}
          <Route path="/" component={Trans} exact />

          {/* الاستقبال */}

          <Route path="/dashboard/فواتير" exact>
            <Invoices user={user} />
          </Route>

          <Route path="/dashboard/انشاء/فواتير" exact>
            <Form_invoices user={user} />
          </Route>

          {/* الفني */}
          <Route path="/dashboard/قائمة-الكروت" exact>
            <Cards user={user} />
          </Route>

          <Route path="/dashboard/قائمة-الكروت/:id" exact>
            <Steps user={user} />
          </Route>

          {/* عام */}
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </DataProider>
  );
}

export default App;
