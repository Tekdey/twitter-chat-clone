import React from "react";

const InputContactList = () => {
  return (
    <div className="flex border-b pb-2 border-gray-500 w-full justify-center items-center">
      <input 
        type="text" 
        name="contact" 
        placeholder="Search your contact..."
        className="rounded-full pl-1 w-11/12 h-10 border border-gray-500 bg-black"
      />
    </div>
  )
};

export default InputContactList;
