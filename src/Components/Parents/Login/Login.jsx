// Import from Lib
import { useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import base64 from "base-64";

// Import Images
import logo from "../../../Assets/logo-no-bg.png";
import Trans from "../../../Function/Trans";

// Import DataContext
import { DataContext } from "../../../DataContext";

// Function
import Loader from "../Loader/Loader";
import { DefaultLinks } from "../../../Function/UsersControl";
import { GetUser } from "../../../Function/Generel";

function Login() {
  const user = GetUser()
  const year = new Date().getFullYear();

  // Use State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [account, setAccount] = useState();
  const [stateFetch, setStateFetch] = useState(false);

  // Data Context
  const { handleCookies } = useContext(DataContext);

  // Function
  const handleSubmit = (e) => {
    if (password === "" || username === "") {
      e.preventDefault();
      setMessage("الرجاء التأكد من تعبئة المدخلات");
    } else {
      e.preventDefault();
      setAccount({ password, username });
    }
  };
  const history = useHistory();
  useEffect(async () => {
    if (Boolean(account) === true) {
      setStateFetch(true);
      const headers = new Headers();
      headers.set(
        "Authorization",
        "Basic " + base64.encode(username + ":" + password)
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
          setStateFetch(false);
          handleCookies(resJson.token);
          history.push("/dashboard");
        }
        if (res.status === 404) {
          setMessage(" حدث خطأ فضلاً تأكد من المدخلات او شبكة الانترنت");
          setStateFetch(false);
        }
      } catch (err) {
        setMessage(" حدث خطأ فضلاً تأكد من المدخلات او شبكة الانترنت");
        setStateFetch(false);
      }
    }
  }, [account]);

  return (
    <>
      {!user.name ? (
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
                  setMessage("");
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
                  setMessage("");
                  setPassword(target.value);
                }}
              />
              <label for="floatingPassword">كلمة المرور</label>
            </div>
            {/* ------------ Link ---------------- */}
            <button className="w-100 btn btn-lg primary-bg" type="submit">
              تسجيل الدخول
            </button>
            <div className="text-danger mt-3">{message}</div>
            <p class="mt-4 mb-3 text-muted">&copy; 2020 - {year}</p>
          </form>
          {stateFetch ? <Loader /> : <></>}
        </section>
      ) : (
        <Trans user={user} />
      )}
    </>
  );
}

export default Login;
