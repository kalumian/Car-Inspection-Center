function Section({ title, Component , users }) {
  return (
    <>
      <hr />
      <div className="section text-end pe-3  my-5">
        <span className="title fs-4">{title}</span>
        <div className="my-5">
          <Component users={users}/>
        </div>
      </div>
    </>
  );
}

export default Section;
