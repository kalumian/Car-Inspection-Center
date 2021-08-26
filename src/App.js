// Import From NPM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Impoer Pages
import Home from "./Components/Parents/Home/Home";
import Login from "./Components/Parents/Login/Login";
import Sections from "./Components/Parents/Sections/Sections";
import Form_invoices from "./Components/Parents/Form_invoices/Form_invoices";

// Import Style
import "./Style/all.scss";

function App() {
  const user = "الاستقبال";
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact>
          <Home user={user} />
        </Route>
        <Route path="/dashboard/:section" exact>
          <Sections user={user} />
        </Route>
        <Route path="/dashboard/انشاء/فواتير" exact>
          <Form_invoices user={user} />
        </Route>
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
