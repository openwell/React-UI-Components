import React from "react";
import "./Header.css";

const HeaderTitle = ({ title }) => {
  return (
    <div className="HeaderTitle">
      <p>
        {title} <span>@lambda 12:00pm</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
