import { Link } from "react-router-dom";
import "./styles.scss";

export function HeaderLink({ to = "/", children, className = "" }) {
  return (
    <Link className={"header-link " + className} to={to}>
      {children}
    </Link>
  );
}
