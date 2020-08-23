import React from 'react';

import ChatRow from './ChatRow';

import './Chat.css';

function Chat() {
  return (
      <div className="chat">
          <ChatRow 
            name="Sarah"
            message="Hi i am Sarah!"
            timestamp="5 seconds ago"
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo"
          />
          <ChatRow 
            name="Sarah"
            message="Hi i am Sarah!"
            timestamp="5 seconds ago"
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo"
          />
          <ChatRow 
            name="Sarah"
            message="Hi i am Sarah!"
            timestamp="5 seconds ago"
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo"
          />
          <ChatRow 
            name="Sarah"
            message="Hi i am Sarah!"
            timestamp="5 seconds ago"
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo"
          />
          <ChatRow 
            name="Sarah"
            message="Hi i am Sarah!"
            timestamp="5 seconds ago"
            profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu9RwSslYs1gBC4kXtaLw1qBbPOAA22SB0VPPRno=s83-c-mo"
          />
      </div>
  );
}

export default Chat;