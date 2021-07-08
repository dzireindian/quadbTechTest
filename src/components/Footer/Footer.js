import React, { Component } from "react";

function Footer() {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          border: "solid 1px #191d28",
          backgroundColor: "#191d28",
          position: "fixed",
          left: "0",
          alignItems: "center",
          width: "100vw",
          height: "47px",
          bottom: "0",
          zIndex: "8",
        }}
      >

      <div className="d-flex align-items-center text-center">
      <div className="footer-text">Copyright © 2019</div>
      <div className="footer-text">HodlInfo.com</div>
      <div className="footer-text">
        Developed By
        <a
          rel="nofollow"
          href="https://www.quadbtech.com/"
          target="_blank"
          style={{ color: "rgb(61, 198, 193)" }}
        >
          QuadBTech
        </a>
      </div>
      <div className="footer-text pointer" style={{ marginLeft: "auto" }}>
        <a href="mailto:support@hodlinfo.com" className="footer-text-link">
          Support
        </a>
      </div>
    </div>

        <button
          className="add-button btn btn-outline-info"
          style={{ display: "none" }}
        >
          Add hodlinfo to home screen
        </button>
      </div>
    </>
  );
}

export default Footer;
