// Import from Lib
import { Link } from "react-router-dom";
import { useContext } from "react";

// Import Images
import logo from "../../../Assets/logo-no-bg.png";

// Import DataContext
import { DataContext } from "../../../DataContext";

function Login() {
  const { setUser } = useContext(DataContext);
  const year = new Date().getFullYear();
  return (
    <section className="login d-flex justify-content-center align-items-center vh-100">
      <form style={{ width: "19rem" }} className="text-center">
        <img class="mb-3" src={logo} alt="" width="200" />
        <div class="form-floating mb-3 text-right">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            autoComplete="off"
            placeholder="name@example.com"
            // ---- Set User ---
            onChange={({ target }) => {
              setUser(target.value);
            }}
          />
          <label for="floatingInput">رقم الهوية</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="off"
          />
          <label for="floatingPassword">كلمة المرور</label>
        </div>
        {/* ------------ Link ---------------- */}
        <Link to="/">
          <button className="w-100 btn btn-lg primary-bg" type="submit">
            تسجيل الدخول
          </button>
        </Link>
        <p class="mt-4 mb-3 text-muted">&copy; 2020 - {year}</p>
      </form>
    </section>
  );
}

export default Login;
