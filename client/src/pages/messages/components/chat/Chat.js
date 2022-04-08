import React from "react";
import UsersMessagesMe from "../UsersMessages/UsersMessagesMe";
import UsersMessagesOther from "../UsersMessages/UsersMessagesOther";
import "./Chat.scss";

export default function Chat() {
  return (
    <div className="container-chat">
      <div className="container-header-chat">
        <h1>Pseudo</h1>
      </div>
      {/*////////////////// CHAT ///////////////////*/}
      <div className="chat">
        <UsersMessagesMe />
        <UsersMessagesOther />
      </div>
      {/*////////////////// INPUT ///////////////////*/}
      <div className="inputs">
        <form type="POST">
          <input
            type="text"
            className="inputTextChat"
            placeholder="Entrez un nouveau message"
            onChange={(e) => setChat(e.currentTarget.value)}
          />
          <input type="submit" className="inputSubmitChat" />
        </form>
      </div>
    </div>
  );
}
