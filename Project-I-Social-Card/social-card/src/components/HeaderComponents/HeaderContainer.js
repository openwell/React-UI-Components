import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";

const headerContainer = () => {
    const data={
        title: 'Lambda',
        src: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere maxime harum. Sint dicta, adipisci repudiandae vero nihil itaque? Autem aperiam dolore perspiciatis atque libero?'
    }
  return (
    <div className="HeaderContainer">
      <ImageThumbnail title={data.src}/>
      <div className='HeaderContainer_Sub'>
        <HeaderTitle title={data.title}/>
        <HeaderContent title={data.content}/>
      </div>
    </div>
  );
};

export default headerContainer;
