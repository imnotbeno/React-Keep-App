import React from "react";

var year = new Date();

function Footer(){
    return <p>Copyright {year.getFullYear()}</p>;
}

export default Footer;