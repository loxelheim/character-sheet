import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {
  const myRoutes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/corvid-not-found", name: "404" }, // non-existing route
  ];

  const defaultStyles = "";
  return (
    <>
      <nav className="w-full flex align-middle justify-center border-b-4 border-b-beige-900">
        {myRoutes.map((r, i) => (
          <NavLink
            key={i}
            to={r.path}
            className={({ isActive }) =>
              "min-h-10 min-w-30 p-4 text-align flex align-middle justify-center " +
              (isActive
                ? "text-beige bg-beige-900 hover:bg-beige-800"
                : "bg-beige text-beige-900 hover:bg-beige-100"
              )
            }
          >
            {r.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
