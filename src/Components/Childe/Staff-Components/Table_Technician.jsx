function Technician({users}) {
  console.log(users);
  const users_content = users.filter((item) => item.type === "Fitter");
  
  return (
    <>
      <thead className="fw-bolder">
        <tr>
          <td>الاسم</td>
          <td>رقم الهوية</td>
        </tr>
      </thead>
      <tbody>
          {users_content.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.identity}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
}

export default Technician;
