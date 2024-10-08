import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modeContext } from "../Context/ModeContext";

const Footer = () => {
  const {mode} = useContext(modeContext)
  return (
    <footer className={`${mode === "light" ? "bg-dark" : "bg-light"} ${mode === "light" ? "text-light" : "text-dark"} text-center mt-4 pt-4`}>
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #3b5998" }}
            to="/#"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          {/* <!-- Twitter --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "black" }}
            to="/#!"
            role="button"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>

          {/* <!-- Google --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            to="/#"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Link>

          {/* <!-- Instagram --> */}
          
          {/* <!-- Linkedin --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            to="/#"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
          {/* <!-- Github --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            to="/#"
            role="button"
          >
            <i className="fab fa-github"></i>
          </Link>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright :  
        <Link to="https://mdbootstrap.com/">
           MDBootstrap.com
        </Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
