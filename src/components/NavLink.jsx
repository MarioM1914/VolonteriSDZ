import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ to, exact, activeClassName, className, children }) {
  const location = useLocation();
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to);

  const classes = `${className} ${isActive ? activeClassName : ""}`;

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export default NavLink;
