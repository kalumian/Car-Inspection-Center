function Section({ title, Component }) {
  return (
    <>
      <hr />
      <div className="section text-end pe-3  my-5">
        <span className="title fs-4">{title}</span>
        <div className="my-5">
          <Component />
        </div>
      </div>
    </>
  );
}

export default Section;
