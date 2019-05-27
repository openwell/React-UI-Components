import React from "react";
import "./Header.css";

const imageThumbnail = ({ title }) => {
  return (
    <>
      <div className="HeaderThumbnail">
        <img src={title} alt="logo" />
      </div>
    </>
  );
};

export default imageThumbnail;
