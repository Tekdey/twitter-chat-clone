import React from "react";
import images from "../../constant/images";
import UserPicture from "../userPicture/UserPicture";

const PictureButton = () => {
  return (
      <>
        <div className="flex justify-around rounded-full p-2 w-full cursor-pointer hover:bg-slate-900 bg-opacity-5 ">
          <UserPicture picWidth={12} picHeight={12} />
            <div className="hidden lg:flex lg:flex-col lg:justify-around pl-2">
                <span className="text-white">Tekdey 🎁</span>
                <span className=" text-gray-500 ">@Tekdey</span>
            </div>
            <img src={images.more} alt="more" className="hidden lg:block"/>
        </div>
        </>
     
  )
};

export default PictureButton;
