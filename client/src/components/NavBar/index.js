import React from "react";
import { NavLink } from "react-router-dom";

// const styles = {
//     margin :{ inLine: "25rem"}
// }
   
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-info mx-5 my-2">
        <b><h5 className="ml-3">My Google Books </h5></b>
        <ul className= "nav justify-content-end mr-3" >
      <li><b><NavLink className="nav-item text-dark mx-2" to="/"> Search Books</NavLink></b></li>
      <li>/</li>
      <li><b><NavLink className="nav-item text-dark mx-2" to="/savedBooks">Saved Books </NavLink></b></li>
    </ul>
    </nav>
  );
}

export default Nav;
