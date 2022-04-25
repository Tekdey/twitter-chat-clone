import React from "react";
import NavMessages from "../../components/Messages__navbar/NavMessages";
import ButtonMessages from "../../components/Messages__button/ButtonMessages";
import ContactList from "../../components/Messages__contactList/ContactList";
import Chat from "../../components/Messages__chat/Chat";
import './scrollbar.css'

const Messages = () => {
  return (
      <div className="bg-black w-full h-screen overflow-hidden flex">
          <div className="w-full md:w-[600px] md:border-r border-gray-500 lg:w-5/12">
            <NavMessages />
            {/* <ButtonMessages /> */}
            <ContactList />
          </div>
          <Chat />
      </div>
  )
};

export default Messages;
