// Import from Lib
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import base64 from "base-64";

// Import Images
import logo from "../../../Assets/logo-no-bg.png";

// Import DataContext
import { DataContext } from "../../../DataContext";

function Login() {
  const year = new Date().getFullYear();

  // Use State
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [account, setAccount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount({ password, username });
  };

  useEffect(async () => {
    if (Boolean(account) === true) {
      const headers = new Headers();
      headers.set(
        "Authorization",
        "Basic " + base64.encode("Alwalead" + ":" + "12345")
      );
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/login",
          {
            method: "POST",
            headers,
          }
        );
        let resJson = await res.json();
        if (res.status === 200) {
          console.log(resJson);
          setMessage("work");
        }
      } catch (err) {
        setMessage(" حدث خطأ فضلاً تأكد من المدخلات او شبكة الانترنت");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    }
  }, [account]);
  return (
    <section className="login d-flex justify-content-center align-items-center vh-100">
      <form
        style={{ width: "19rem" }}
        className="text-center"
        onSubmit={handleSubmit}
      >
        <img class="mb-3" src={logo} alt="" width="200" />
        <div class="form-floating mb-3 text-right">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            autoComplete="off"
            placeholder="name@example.com"
            value={username}
            onChange={({ target }) => {
              setUsername(target.value);
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
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <label for="floatingPassword">كلمة المرور</label>
        </div>
        {/* ------------ Link ---------------- */}
        <button className="w-100 btn btn-lg primary-bg" type="submit">
          تسجيل الدخول
        </button>
        <div className="test-danger">{message}</div>
        <p class="mt-4 mb-3 text-muted">&copy; 2020 - {year}</p>
      </form>
    </section>
  );
}

export default Login;
