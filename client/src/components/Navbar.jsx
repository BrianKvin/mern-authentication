import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600">
      <div>
        <Link to="">
          <h1 className="font-bold">BrianKelvin</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
