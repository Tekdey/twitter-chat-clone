import React from "react";
import Contact from "./components/contact/Contact";
import Chat from "./components/chat/Chat";
import "./Messages.scss";

export default function Messages() {
  return (
    <div className="main-container-messages">
      <Contact /> <Chat />
    </div>
  );
}
