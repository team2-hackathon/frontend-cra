import React, { useState } from "react";
const ClickableBox = ({ image, alt, text }) => {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked(!clicked);
  };
  const boxStyles = clicked ? "bg-[#C5E1F2] " : "bg-gray-200";
  return (
    <div
      className={` rounded-lg flex flex-col items-center justify-center ${boxStyles} items-center justify-center w-2/5 rounded-lg cursor-pointer px-2 py-4`}
      onClick={toggleClick}
    >
      <img src={image} alt={alt} className="w-[2rem]" />
      <p className="text-center">{text}</p>
    </div>
  );
};
export default ClickableBox;
