import React from "react";
const styles = {
    margin :{ inLine: "25rem"}
}
   
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-info mx-5">
        <b><h5 className="ml-3">My Google Books </h5></b>
        <ul className= "nav justify-content-end mr-3" >
      <li><b><a className="nav-item text-dark mx-2" href="/"> Search Books</a></b></li>
      <li>/</li>
      <li><b><a className="nav-item text-dark mx-2" href="/">Saved Books </a></b></li>
    </ul>
    </nav>
  );
}

export default Nav;
