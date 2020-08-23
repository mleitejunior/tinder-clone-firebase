import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./ChatRow.css";

function ChatRow({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chatRow">
        <Avatar className="chatRow__image" alt={name} src={profilePic} />
        <div className="chatRow__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatRow__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default ChatRow;
