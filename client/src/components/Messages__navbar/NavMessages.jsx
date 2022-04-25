import React from "react";
import images from "../../constant/images";
import UserPicture from "../userPicture/UserPicture";

const NavMessages = () => {
  return (
<div className="flex flex-col pb-4">
    <div className="flex pt-3 justify-around">
        <UserPicture picWidth="10" picHeight="10" />
        <h1 className="text-white text-lg flex items-center justify-center">Messages</h1>
        <img src={images.settings} alt='settings' className="w-5 h-5 self-center" />
    </div>
</div>

)
};

export default NavMessages;
