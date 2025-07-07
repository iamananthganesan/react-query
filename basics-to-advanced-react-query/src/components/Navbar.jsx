import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-area">React Query</div>
      <div className="navbar-items">
        <Link to="/regularfetch">Regular Fetch</Link>
        <Link to="/reactqueryfetch">Fetch with react query</Link>
        <Link to="/reactquerybyid/:postid">React Query by id</Link>
        <Link to="/reactqueryfetchbyclick">
          Fetch with react query on click
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
