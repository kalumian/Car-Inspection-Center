function Section({ Component, title }) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <Component />
    </div>
  );
}

export default Section;
