import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo",
      message: "Hi?",
    },
    {
      message: "Hey!",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput('');
  }

  return (
    <>
      <div className="chatScreen">
        <p className="chatScreen__timestamp">
          YOU MATCHED HEHEH WHEN 10/03/2020
        </p>
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen_avatar"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          type="submit"
          onClick={handleSend}
        className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </>
  );
}

export default ChatScreen;
