import { Link, useLocation } from "react-router-dom";
function Link_sidebar({ title, icon }) {
  const location = useLocation();
  return (
    <Link
      to={title.split(" ").join("-")}
      className={`list-group-item list-group-item-action bg-transparent second-text fw-bold ${
        location.pathname === "/" + title.split(" ").join("-") ? "active" : ""
      }`}
    >
      <i className={icon + " me-2"}></i>
      <span>{title}</span>
    </Link>
  );
}

export default Link_sidebar;
