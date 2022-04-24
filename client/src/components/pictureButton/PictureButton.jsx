import React from "react";
import images from "../../constant/images";

const PictureButton = () => {
  return (
      <>
        <div className="flex justify-around  hover:bg-slate-900 rounded-full p-2 w-full cursor-pointer ">
        <img 
            className="rounded-full h-12 w-12"
            src="https://cdna.artstation.com/p/assets/images/images/003/381/254/large/paola-morpheus-mr-robot-a4.jpg?1473097860" 
            alt="profile"
            />
            <div className="hidden lg:flex lg:flex-col lg:justify-around">
                <span className="text-white">Tekdey 🎁</span>
                <span className=" text-gray-500 ">@Tekdey</span>
            </div>
            <img src={images.more} alt="more" className="hidden lg:block"/>
        </div>
        </>
     
  )
};

export default PictureButton;
