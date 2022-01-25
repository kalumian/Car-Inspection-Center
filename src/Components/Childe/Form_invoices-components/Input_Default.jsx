function Input_Default({
  id,
  type = "text",
  name,
  classs,
  register,
  pler,
  req = true,
}) {
  return (
    <input
      type={type}
      {...register(`${name}`, req ? { required: true } : { required: false })}
      className={`form-control ${classs}`}
      id={id}
      placeholder={pler}
      autoComplete="off"
    />
  );
}

export default Input_Default;
