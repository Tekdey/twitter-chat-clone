import React from "react";
import Contact from "../Messages__contact/Contact";
import InputContactList from "../Messages__inputContactList/InputContactList";

const ContactList = () => {
  return  (
    <div className=" overflow-y-scroll h-full flex flex-col pb-32">
      <InputContactList />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
)
};

export default ContactList;
