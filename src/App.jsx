import React, { useEffect, useState } from 'react'

import { SOCKET_ROOM } from './constants/socket'

import './index.css'
import ChatRoomPage from './containers/ChatRoomPage';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  
  const socket = new WebSocket(SOCKET_ROOM);

  useEffect(() => {
  
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data).message;

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleKeyDown = (event) => {
    setTimeout(() => {
      if (event.keyCode === 13) {
        socket.send(
          JSON.stringify({message: messageInput})
        );
        setMessageInput('');
      }
    }, 300)
  };

  return (
    <>
      <ChatRoomPage 
        messages = {messages}
        setMessageInput = {setMessageInput}
        handleKeyDown = {handleKeyDown}
        messageInput = {messageInput}
      />
    </>
  );
};

export default App;