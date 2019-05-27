import React from "react";
import "./Header.css";

const headerContent = ({ title }) => {
  return (
    <div className="HeaderContent">
      <p>{title}</p>
    </div>
  );
};

export default headerContent;
