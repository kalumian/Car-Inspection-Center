function Section({ title, Components }) {
  return (
    <div className="my-3">
      <hr />
      <div className="my-2 pe-3">
        <h2 className="py-2 fs-3">{title}</h2>
        <Components/>
      </div>
    </div>
  );
}

export default Section;
