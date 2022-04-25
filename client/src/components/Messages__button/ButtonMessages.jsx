import React from "react";
import images from "../../constant/images";

const ButtonMessages = () => {
  return <button className="bg-blue-500 p-4 rounded-full fixed bottom-20 right-5">
      <img src={images.message} alt="write" />
  </button>
};

export default ButtonMessages;
