import React from "react";

const UserPicture = ({picWidth, picHeight}) => {
  return <img 
  className={`rounded-full h-${picHeight} w-${picWidth}`}
  src="https://cdna.artstation.com/p/assets/images/images/003/381/254/large/paola-morpheus-mr-robot-a4.jpg?1473097860" 
  alt="profile"
  />
};

export default UserPicture;
