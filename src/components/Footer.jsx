import React from "react";

var year = new Date();

function Footer() {
  return (
    <div className="footer">
      <p className="footer p">Copyright {year.getFullYear()}</p>;
    </div>
  );
}

export default Footer;
