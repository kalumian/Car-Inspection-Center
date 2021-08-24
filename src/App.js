// Import From NPM
import { BrowserRouter as Router, Route } from "react-router-dom";

// Impoer Pages
import Home from "./Components/Parents/Home";
import Sidebar from "./Components/Parents/Sidebar";

// Import Style
import "./Style/all.scss";
function App() {
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Router>
        <Route path="/" component={Sidebar} />
        <Route path="/" component={Home} exact/>
      </Router>
    </div>
  );
}

export default App;
