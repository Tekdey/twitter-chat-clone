import React, { useEffect, useState } from "react";
import NavMessages from "../../components/Messages__navbar/NavMessages";
import ButtonMessages from "../../components/Messages__button/ButtonMessages";
import ContactList from "../../components/Messages__contactList/ContactList";
import Chat from "../../components/Messages__chat/Chat";
import './scrollbar.css'
import jwt_decode from "jwt-decode"
import {ENDPOINT} from "../../utils/APIRoutes"
import io from "socket.io-client"

let socket;

const INITIAL_STATE = {
  username: "",
}

const Messages = () => {

  const [data, setData] = useState(INITIAL_STATE)


  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('token'))
    socket = io(ENDPOINT)
    
    socket.emit('user__join', ({username: jwt_decode(local.token)}), (error) => {
      console.log(error);
    })

    return () => {
      socket.disconnect()

      socket.off()
    }


  },[])

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
