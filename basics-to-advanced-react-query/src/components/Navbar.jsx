import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/regularfetch">Regular Fetch</Link>
      <Link to="/reactqueryfetch">Fetch with react query</Link>
    </div>
  );
};

export default Navbar;
