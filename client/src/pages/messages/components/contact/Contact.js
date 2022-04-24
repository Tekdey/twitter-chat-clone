import React, { useEffect, useState } from "react";
import "./Contact.scss";
import Users from "./components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../../../../utils/APIRoutes";

export default function Contact() {
  const navigate = useNavigate();

  const [contact, setContact] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

  // Todo Private route

  useEffect(() => {
    async function fetchUsers() {
      if (currentUser) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContact(data.data);
      }
    }
    fetchUsers();
  }, [currentUser]);

  return (
    <div className="container-contact">
      <div className="header">
        <h1>Messages</h1>
        <div className="container-contact-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
        </div>
      </div>
      <input type="text" placeholder="Cherchez dans les messages privés" />
      <div className="container-all-contacts">
        {/*////////////////// CONTACTS ///////////////////*/}
        <Users contacts={contact} currentUser={currentUser} />
      </div>
    </div>
  );
}
