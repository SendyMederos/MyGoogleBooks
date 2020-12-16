import React from "react";
const styles = {
    margin :{ inLine: "25rem"}
}
   
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <b><h3>My Google Books </h3></b>
        <ul >
      <li><a className="navbar-brand" href="/"> Search Books</a></li>
      <li><a className="navbar-brand" href="/">Google Books </a></li>
    </ul>
    </nav>
  );
}

export default Nav;
