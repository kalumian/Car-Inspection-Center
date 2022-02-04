// Import From Lib
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useState, useContext } from "react";

// Impoer Components
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
import { DataContext, DataProider } from "./DataContext";

// Import Functions
import { DefaultLinks } from "./Function/UsersControl";
import Trans from "./Function/Trans";

function App() {
  const { user } = useContext(DataContext);

  return (
    <Router>
      <Switch>
        {/* المشرف*/}
        <Route path="/dashboard/الرئيسية" children={<Home />} exact />
        <Route
          path="/dashboard/موظفين"
          children={<Staff user={user} />}
          exact
        />
        <Route
          path="/dashboard/حسابات"
          exact
          children={<Users user={user} />}
        />
        <Route
          path="/dashboard/اعدادات"
          exact
          children={<Web_Setting user={user} />}
        />

        {/* Trans To Home Page */}
        <Route path="/" children={<Trans user={user} />} exact />

        {/* الاستقبال */}
        <Route
          path="/dashboard/فواتير"
          exact
          children={<Invoices user={user} />}
        />
        <Route
          path="/dashboard/انشاء/فواتير"
          exact
          children={<Form_invoices user={user} />}
        />

        {/* الفني */}
        <Route
          path="/dashboard/قائمة-الكروت"
          exact
          children={<Cards user={user} />}
        />
        <Route
          path="/dashboard/قائمة-الكروت/:id"
          exact
          children={<Steps user={user} />}
        />

        {/* عام */}
        <Route path="/login" exact children={<Login />} />
      </Switch>
    </Router>
  );
}

export default App;
