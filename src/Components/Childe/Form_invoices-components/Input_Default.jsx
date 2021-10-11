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
    list="false"
      type={type}
      {...register(`${name}`, req ? { required: true } : { required: false })}
      className={`form-control ${classs}`}
      id={id}
      placeholder={pler}
    />
  );
}

export default Input_Default;
