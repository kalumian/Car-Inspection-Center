// Import From NPM
import { BrowserRouter as Router, Route } from "react-router-dom";

// Impoer Pages
import Home from "./Components/Parents/Home/Home";
import Login from "./Components/Parents/Login/Login";
import Sections from "./Components/Parents/Sections/Sections";

// Import Style
import "./Style/all.scss";

function App() {
  const user = "الاستقبال";
  return (
    <Router>
      <Route path="/dashboard" exact>
        <Home user={user} />
      </Route>
      <Route path="/dashboard/:section">
        <Sections user={user} />
      </Route>
      <Route path="/login" component={Login} exact />
    </Router>
  );
}

export default App;
