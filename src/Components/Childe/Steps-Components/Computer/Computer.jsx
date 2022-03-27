import { useState, useEffect } from "react";
import Loader from "../../../Parents/Loader/Loader";
import Add from "./Add";
import Control from "./Control";
import Edit from "./Edit";
import Send from "./Send";
function Computer({ control, snap, setSnap, user, setTimer, id }) {
  // Hooks
  const [statePage, setStatePage] = useState("ارسال");
  const [code, setCode] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);

  // Fetch
  useEffect(async () => {
    setStateFetch(false);
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/code",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setCode(resJson.code);
      setStateFetch(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="d-flex computer-step content mt-3 ">
      {stateFetch ? (
        <>
          {statePage === "ارسال" ? (
            <Send
              statePage={statePage}
              code={code}
              setStatePage={setStatePage}
              snap={snap}
              setSnap={setSnap}
              control={control}
              setTimer={setTimer}
              user={user}
              id={id}
            />
          ) : statePage === "تعديل" ? (
            <Edit
              statePage={statePage}
              code={code}
              setStatePage={setStatePage}
              user={user}
            />
          ) : statePage === "كنترول" ? (
            <Control setStatePage={setStatePage} />
          ) : (
            <Add
              statePage={statePage}
              code={code}
              setStatePage={setStatePage}
              user={user}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Computer;
