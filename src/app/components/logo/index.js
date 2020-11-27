import React from "react";
// import logo from "../../../../public/resourcess/catlogo.png";
// import catlogo from "../../../../public/resources";

const Logo = ({ width = 200, height = 200 }) =>
  width < 100 ? (
    <img
      width={width}
      height={height}
      src="/resources/catlogo.png"
      alt="Cat Logo"
    />
  ) : (
    <img
      width={width}
      height={height}
      src="/resources/catlogo.png"
      alt="Cat Logo"
    />
  );

export default Logo;
