import React from "react";
import "./User.scss";
import Astronaute from "../../../../../assets/astronaute.jpg";

export default function Users() {
  return (
    <div className="contact">
      <div className="contact-user">
        <img src={Astronaute} />
        <span>PSEUDO</span>
      </div>

      <p>Vous a envoyé.....</p>
    </div>
  );
}
