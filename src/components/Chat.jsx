import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const typingTimeoutRef = useRef(null);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

 useEffect(() => {
  const loadMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => ({
      firstName: msg.senderId?.firstName,
      lastName: msg.senderId?.lastName,
      text: msg.text,
    }));

    setMessages(chatMessages);
  };

  loadMessages();
}, [targetUserId]);



  // socket connection
useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("joinChat", {
        userId,
        targetUserId,
        firstName: user.firstName,
      });
    });

    socket.on("messageReceived", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    socket.on("userTyping", ({ userId: typingUserId }) => {
      if (typingUserId === targetUserId) {
        setIsTyping(true);
      }
    });

    socket.on("userStoppedTyping", ({ userId: typingUserId }) => {
      if (typingUserId === targetUserId) {
        setIsTyping(false);
      }
    });

    return () => {
      socket.off("messageReceived");
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [userId, targetUserId]);


  // auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages,isTyping]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });

     socketRef.current.emit("typingStop", {
      userId,
      targetUserId,
    });

    setNewMessage("");
  };

   const handleTyping = (e) => {
    setNewMessage(e.target.value);

    socketRef.current.emit("typingStart", {
      userId,
      targetUserId,
      firstName: user.firstName,
    });

    clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      socketRef.current.emit("typingStop", {
        userId,
        targetUserId,
      });
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto h-[80vh] flex flex-col bg-base-200 rounded-xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="p-4 border-b bg-base-300 font-semibold text-lg">
        💬 Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${
              user.firstName === msg.firstName ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-header text-xs opacity-70">
              {msg.firstName} {msg.lastName}
            </div>

            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="text-sm opacity-60 italic">
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-base-300 flex gap-2">
        <input
          className="input input-bordered flex-1"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleTyping}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;