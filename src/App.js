import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Pages/Sidebar";

// Import Style
import "./Style/all.scss";
function App() {
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Router>
        <Route path="/" component={Sidebar} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
