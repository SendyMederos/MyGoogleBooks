import React from "react";

// Exporting the Wrapper, FixedWrapper, Container, Row, and Col components from this file
export function Container({children }) {
  return <div className="">{children}</div>;
}

export function Row({children }) {
  return <div className= "mx-5 my-3" >{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export  function Wrapper({ children }) {
  return <div style={{ marginLeft: "10%" }} className="wrapper">{children}</div>;
}
