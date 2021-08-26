import { Link, useLocation } from "react-router-dom";
function Link_sidebar({ title, icon, link }) {
  const location = useLocation();
  return (
    <Link
      to={`/dashboard/${link}`}
      className={`list-group-item list-group-item-action bg-transparent second-text fw-bold text-end ${
        location.pathname === "/dashboard/" + link
          ? "active"
          : ""
      }`}
    >
      <i className={icon + " me-2"}></i>
      <span>{title}</span>
    </Link>
  );
}

export default Link_sidebar;
