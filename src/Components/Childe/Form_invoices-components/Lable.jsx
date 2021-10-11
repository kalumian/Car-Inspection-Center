function Lable({ title, active = true, For }) {
  return (
    <>
      <label htmlFor={For} className="form-label">
        {title}
        {/* Set Important Or Not ! */}
        {active ? <span className="text-danger">*</span> : <></>}
      </label>
    </>
  );
}

export default Lable;
