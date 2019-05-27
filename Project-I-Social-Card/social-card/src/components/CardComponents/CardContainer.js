import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const cardContainer = () => {
  const data = {
    title:
      "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
    bannerTitle: "Get Started With React",
    bannerPara:
      "React makes it painless to create interactive UI, design simple view for each state in your application",
    bannerLink: "https://www.reactjs.org"
  };
  const clickHandler = event => {
    return window.open("https://www.reactjs.org", "_blank");
  };
  return (
    <div className="CardContainer" onClick={clickHandler}>
      <CardBanner title={data.title} />
      <CardContent
        bannerLink={data.bannerLink}
        bannerPara={data.bannerPara}
        bannerTitle={data.bannerTitle}
      />
    </div>
  );
};

export default cardContainer;
