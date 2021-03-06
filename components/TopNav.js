import React from 'react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div style={{ flex: 1 }}>
        <a
          href="tel:+255754249777"
          style={{ backgroundColor: '' }}
          className="d-none d-md-inline"
        >
          <i className="fa fa-phone" /> +255 754 249 777
        </a>
        <a
          href="mailto:info@portslinehotel.co.tz"
          style={{ backgroundColor: '' }}
        >
          <i className="fa fa-envelope" /> info@portslinehotel.co.tz
        </a>
        <Link href="https://covid19.who.int/region/afro/country/tz" passHref>
          <a target="_blank" className="d-none d-md-inline">
            <i className="fa fa-exclamation-circle " /> COVID-19 Travel Updates
          </a>
        </Link>
      </div>
      <div className="lang-div d-none d-md-inline">
        <select>
          <option>English</option>
          <option>Swahili</option>
        </select>
      </div>
    </div>
  );
};

export default TopNav;
