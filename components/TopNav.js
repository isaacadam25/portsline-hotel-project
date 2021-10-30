import React from 'react';

const TopNav = () => {
  return (
    <div className="top-nav" style={{backgroundColor: "", display: "flex"}}>
      <a href="#" style={{ backgroundColor: "", }}>
        <i className="fa fa-phone" /> +255754249777
      </a>
      <a href="#" style={{ backgroundColor: "" }}>
        <i className="fa fa-envelope" /> info@portsline.co.tz
      </a>
      <a href="#" className="d-none d-md-inline">
        <i className="fa fa-exclamation-circle "> COVID-19 Travel Updates </i>
      </a>
    </div>
  );
};

export default TopNav;
