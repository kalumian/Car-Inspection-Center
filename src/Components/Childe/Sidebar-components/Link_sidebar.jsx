import { Link, useLocation } from "react-router-dom";

function Link_sidebar({ title, icon }) {
  const location = useLocation();

  return (
    <Link
      href={title}
      className={`list-group-item list-group-item-action bg-transparent second-text fw-bold ${
        location.pathname === "title" ? "active" : ""
      }`}
    >
      <i className={icon + " me-2"}></i>
      {title}
    </Link>
  );
}

export default Link_sidebar;
