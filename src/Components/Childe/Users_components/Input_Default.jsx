function Input_Default({ id, type = "text", classs, pler }) {
  return (
    <input
      type={type}
      className={`form-control ${classs}`}
      id={id}
      placeholder={pler}
    />
  );
}

export default Input_Default;
