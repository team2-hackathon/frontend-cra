import React, { useState } from "react";
const ClickableBox = ({ image, alt, text }) => {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked(!clicked);
  };
  const boxStyles = clicked ? "bg-blue-500" : "bg-gray-200";
  return (
    <div
      className={` rounded-lg flex flex-col items-center justify-center ${boxStyles}`}
      onClick={toggleClick}
    >
      <img src={image} alt={alt} />
      <p className="text-center">{text}</p>
    </div>
  );
};
export default ClickableBox;
