import React from "react";
import { images } from "../../constant";

const MessagesInput = () => {
  return (
      <div className="flex h-12 border-t border-gray-500 w-full self-end justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={images.images} alt="images" className="h-8 w-8" />
            <img src={images.gif} alt="gif" className="h-8 w-8" />
            <input type="text" placeholder="Your message..." className="border text-white border-gray-500 bg-black pl-2 rounded-full w-96" />
            <img src={images.send} alt="send" className="h-8 w-8" />
          </div>
      </div>
  )
};

export default MessagesInput;
