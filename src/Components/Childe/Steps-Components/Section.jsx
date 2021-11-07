import { useState } from "react/cjs/react.development";

function Section({ Component, title }) {
  return (
    <div className="section shadow">
      <h2 className="section-title">{title}</h2>
      <div className="timer"></div>
      <Component />
    </div>
  );
}

export default Section;
