import { useEffect, useState } from "react/cjs/react.development";
import Timer from "./Timer/Timer";

function Section({ Component, title, snap, setSnap, control, setTimer, user , id }) {
  return (
    <div className="section shadow">
      <h2 className="section-title">{title}</h2>
      <Component
        snap={snap}
        setSnap={setSnap}
        control={control}
        setTimer={setTimer}
        user={user}
        id={id}
      />
    </div>
  );
}

export default Section;
