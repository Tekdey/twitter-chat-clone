import React from "react";
import HeaderChat from "../Messages__headerChat/HeaderChat";
import MessagesInput from "../Messages__input/MessagesInput";
import Message from "../Messages__message/Message";
import MessageUsers from "../Messages__messageUsers/MessageUsers";

const Chat = () => {
  return (
      <div className="w-full hidden md:flex flex-col">
          {/* <div className="flex flex-col justify-center items-start w-[350px]">
            <h1 className="text-white text-4xl my-3 font-bold">Select a message</h1>
            <p className="text-gray-500">Choose from your existing conversations, start a new one, or just keep swimming.</p>
            <button className="bg-blue-500 rounded-full px-5 py-3 text-white mt-5">New Message</button>
          </div> */}

            <HeaderChat />
            <div className="h-full overflow-y-scroll">
              <Message />
              <MessageUsers />
              <Message />
              <Message />
              <MessageUsers />
              <MessageUsers />
              <MessageUsers />
              <Message />
              <Message />
              <MessageUsers />
            </div>
            <MessagesInput />
          
      </div>
  )
};

export default Chat;
