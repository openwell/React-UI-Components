import React from "react";
import "./Header.css";

const HeaderTitle = ({ title, time }) => {
  return (
    <div className="HeaderTitle">
      <p>
        {title} <span>@lambda {time}</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
