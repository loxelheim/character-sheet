import { Link, Outlet } from "react-router-dom";
import React from 'react'

export default function NavBar() {
  const myRoutes = [
    {path:"/", name:"Home"},
    {path:"/about", name:"About"},
    {path:"/corvid-not-found", name:"404"}, // non-existing route
  ]
  return (
    <nav className="w-full h-10 flex align-middle justify-center">
      {myRoutes.map((r, i) => <Link key={i} to={r.path} className="p-2">{r.name}</Link>)}
    </nav>
  )
}
