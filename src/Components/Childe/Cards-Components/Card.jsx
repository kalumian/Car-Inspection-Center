import { Link } from "react-router-dom";

function Card({
  Created_date,
  customer_motion_service,
  customer_board="SAFE 2134",
  customer_VIN,
  customer_type,
  customer_factory,
  user,
  id,
  bill_id,
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
          {String(customer_board).split(" ").join(" - ").toUpperCase()}
        </p>
        {user.type !== "المشرف" ? (
          <>
            <Link to={`/dashboard/قائمة-الكروت/${id}-${bill_id}-${id}`} class="btn btn-primary">
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
