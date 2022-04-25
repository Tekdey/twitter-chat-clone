import React from "react";

const HeaderChat = () => {
  return (
  <div className="text-white w-full h-14 px-3">
      <div className="flex items-center">
          <img 
            src="https://www.manga-news.com/public/images/pix/dvd/1814/assassination-classroom-anime-visual-3.jpg" 
            alt="profil" 
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col mx-3">
              <span className="font-bold text-xl ">Jeff 😎</span>
              <span className="text-gray-500">@Reffe07</span>
          </div>
      </div>
  </div>
  );
};

export default HeaderChat;
