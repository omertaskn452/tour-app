import React from "react";
import { Link } from "react-router-dom";

export default function Tour1() {
  return(
    <>
      <div>Hello I'm tour one</div>
      <div>
        <Link to="/">Come back to Home page</Link>
      </div>
    </>
  )
}