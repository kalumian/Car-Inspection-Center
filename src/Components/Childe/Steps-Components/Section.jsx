import { useEffect, useState } from "react/cjs/react.development";
import Timer from "./Timer/Timer";

function Section({ Component, title, timer }) {
  return (
    <div className="section shadow">
      <h2 className="section-title">{title}</h2>
      <Component timer={timer} />
    </div>
  );
}

export default Section;
