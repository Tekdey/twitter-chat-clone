import React from "react";
import UserPicture from "../userPicture/UserPicture";

const Contact = () => {
  return <div className="w-full flex p-2">
      <UserPicture picWidth='12' picHeight="12" />
      <div className="flex flex-col w-full px-3">
        <div className="flex justify-between">
          <div>
          <span className="text-white">Tekdey</span>
          <span className="text-gray-500">@Tekdey</span>
          </div>
          <span className="text-gray-500">8 avr.</span>
        </div>
        <span className="text-gray-500">Lorem, ipsum dolor...</span>
      </div>
  </div>
};

export default Contact;
