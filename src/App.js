import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

// Import Style
import "./Style/all.scss";
function App() {
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
