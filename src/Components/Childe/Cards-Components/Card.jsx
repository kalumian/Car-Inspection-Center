import { Link } from "react-router-dom";

function Card({
  Created_date,
  customer_motion_service,
  customer_board_letters,
  customer_board_number,
  customer_VIN,
  customer_type,
  customer_factory,
  user,
}) {
  return (
    <div class="card my-4">
      <div class="card-header d-flex justify-content-around py-3">
        <span className="date">{Created_date}</span>
        <span className="type">{customer_motion_service}</span>
      </div>
      <div class="card-body">
        <p class="card-text">
          {customer_factory} - {customer_type}
        </p>
        <p class="card-text">VIN: {customer_VIN}</p>
        <p class="card-text">
          {String(customer_board_letters).split("").join(" ")} -{" "}
          {String(customer_board_number).split("").join(" ")}
        </p>
        {user !== "المشرف" ? (
          <>
            <Link to="/dashboard/قائمة-الكروت/sd123" class="btn btn-primary">
              بدء الفحص
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Card;
