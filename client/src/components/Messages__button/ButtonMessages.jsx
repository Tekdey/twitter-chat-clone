import React from "react";
import images from "../../constant/images";

const ButtonMessages = () => {
  return <button className="bg-blue-500 p-4 rounded-full absolute bottom-20">
      <img src={images.message} alt="write" />
  </button>
};

export default ButtonMessages;
