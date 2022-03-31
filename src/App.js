// Import From Lib
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useState, useContext } from "react";
import { useCookies } from "react-cookie";
// Impoer Components
import Home from "./Components/Parents/Home/Home";
import Login from "./Components/Parents/Login/Login";
import Form_invoices from "./Components/Parents/Form_invoices/Form_invoices";
import Invoices from "./Components/Parents/Invoices/Invoices";
import BillPage from "./Components/Childe/Invoices-components/BillPage";
import Cards from "./Components/Parents/Cards/Cards";
import Steps from "./Components/Parents/Steps/Steps";
import Staff from "./Components/Parents/Staff/Staff";
import Users from "./Components/Parents/Users/Users";
import Web_Setting from "./Components/Parents/Web_setting/Web_Setting";
import Inquiry from "./Components/Parents/Inquiry/Inquiry";

// Import Style
import "./Style/all.scss";

// Get Data From Context

// Import Functions
import Trans from "./Function/Trans";
import { GetUser } from "./Function/Generel";

function App() {
  const user = GetUser();

  return (
    <Router>
      <Switch>
        {/* المشرف*/}
        <Route path="/dashboard/الرئيسية" children={<Home />} exact />
        <Route path="/dashboard/موظفين" children={<Staff />} exact />
        <Route path="/dashboard/حسابات" exact children={<Users />} />
        <Route path="/dashboard/اعدادات" exact children={<Web_Setting />} />
        <Route path="/dashboard/استعلام" exact children={<Inquiry />} />

        {/* Trans To Home Page */}
        <Route path="/" children={<Trans />} exact />
        <Route path="/dashboard" children={<Trans />} exact />

        {/* الاستقبال */}
        <Route path="/dashboard/فواتير" exact children={<Invoices />} />
        <Route
          path="/dashboard/بيانات-الفاتورة/:id"
          exact
          children={<BillPage />}
        />
        <Route
          path="/dashboard/انشاء/فواتير"
          exact
          children={<Form_invoices />}
        />

        {/* الفني */}
        <Route path="/dashboard/قائمة-الكروت" exact children={<Cards />} />
        <Route path="/dashboard/قائمة-الكروت/:id" exact children={<Steps />} />

        {/* عام */}
        <Route path="/login" exact children={<Login />} />
      </Switch>
    </Router>
  );
}

export default App;
