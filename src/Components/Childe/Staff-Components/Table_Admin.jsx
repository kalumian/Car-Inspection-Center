function Table_Admin({ users }) {
  const users_content = users.filter((item) => item.type === "SuperVisor");
  
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

export default Table_Admin;
