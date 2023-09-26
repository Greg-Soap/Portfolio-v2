import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center branding-block"></div>
        </div>
        <div className="back-to-top">
          <a href="#site-header">
            <i className="bi bi-box-arrow-up"></i>
          </a>
        </div>
        <div className="row footer-bottom">
          <div className="col-md-6">
            <p>All rights reserved &copy; 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
