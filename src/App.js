// Import From NPM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Impoer Pages
import Home from "./Components/Parents/Home/Home";
import Login from "./Components/Parents/Login/Login";
import Sections from "./Components/Parents/Sections/Sections";
import Form_invoices from "./Components/Parents/Form_invoices/Form_invoices";

// Import Style
import "./Style/all.scss";
import { DataProider } from "./DataContext";

function App() {
  const user = "الاستقبال";
  return (
    <DataProider>
      <Router>
        <Switch>
          <Route path="/dashboard" exact>
            <Home user={user} />
          </Route>
          <Route path="/dashboard/:section" exact>
            <Sections user={user} />
          </Route>
          <Route path="/dashboard/انشاء/فواتير" exact component={Form_invoices}/>
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </DataProider>
  );
}

export default App;
