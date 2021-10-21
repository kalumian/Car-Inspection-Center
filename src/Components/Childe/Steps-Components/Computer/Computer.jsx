import { useState } from "react";
import Add from "./Add";
import Control from "./Control";
import Edit from "./Edit";
import Send from "./Send";
function Computer() {
  // Hooks
  const [input, setInput] = useState("");
  const [statePage, setStatePage] = useState("ارسال");
  return (
    <div className="d-flex computer-step content mt-3 ">
      {statePage === "ارسال" ? (
        <Send statePage={statePage} setStatePage={setStatePage} />
      ) : statePage === "تعديل" ? (
        <Edit statePage={statePage} setStatePage={setStatePage} />
      ) : statePage === "كنترول" ? (
        <Control setStatePage={setStatePage} />
      ) : (
        <Add statePage={statePage} setStatePage={setStatePage} />
      )}
    </div>
  );
}

export default Computer;
