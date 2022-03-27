function Notifications({ notificationFinde, notification }) {
  return (
    <div>
      <table className="table table-light text-center rtl mt-5 notifications">
        {notificationFinde ? (
          <>
            <thead className="fw-bolder">
              <tr>
                <td className="col-10 ">
                  <span className="d-flex align-items-center justify-content-center ">
                    الإشعار
                    <i className="fas fa-bell px-2"></i>
                  </span>
                </td>
                <td className="col">تاريخ </td>
              </tr>
            </thead>
            <tbody>
              {notification.map((i) => {
                return (
                  <tr key={i.id}>
                    <td className="py-3">{i.date}</td>
                    <td className="py-3">{i.content}</td>
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}

export default Notifications;
