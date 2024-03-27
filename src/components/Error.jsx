import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../public/404.svg";
import "./Error.css";
const Error = () => {
  return (
    <>
      <div className="page-not-found">
        <img
          src={image1}
          alt="error"
          style={{ width: "500px", marginBottom: 20 }}
        />
        <h2 className="mb-3">PAGE NOT FOUND</h2>
        <NavLink to="/" className="btn btn-primary" style={{ fontSize: 16 }}>
          Back To Home Page
        </NavLink>
      </div>
    </>
  );
};

export default Error;
