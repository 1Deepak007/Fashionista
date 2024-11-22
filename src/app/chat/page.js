"use client";

import { useState } from "react";

// Member List Component
const MemberList = ({ members, selectedMember, onMemberSelect }) => (
  <ul className="space-y-4 flex-grow overflow-y-auto">
    {members.map((member, index) => (
      <li
        key={index}
        onClick={() => onMemberSelect(member)}
        className={`flex items-center p-4 bg-white rounded-lg shadow cursor-pointer transition hover:bg-gray-50 ${
          selectedMember.name === member.name ? "border-l-4 border-purple-500" : ""
        }`}
      >
        {/* Avatar Section */}
        <div className="relative w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
          <img
            src={member.image || "default-avatar.png"}
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
          />
          {/* Online Status */}
          <span
            className={`absolute bottom-1 right-1 w-3 h-3 rounded-full ${
              member.online ? "bg-green-500" : "bg-gray-400"
            } border-2 border-white`}
          ></span>
        </div>

        {/* Member Info */}
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{member.name}</p>
          <p className="text-sm text-gray-500 truncate">{member.message}</p>
        </div>
      </li>
    ))}
  </ul>
);

// Message Bubble Component
const MessageBubble = ({ message, isCurrentUser }) => (
  <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
    <div>
      <div
        className={`p-3 max-w-sm rounded-lg shadow-md ${isCurrentUser ? "bg-purple-500 text-white" : "bg-gray-200 text-black"}`}
      >
        <p>{message.text}</p>
      </div>

      <div className={`text-xs text-gray-500 mt-1 ${isCurrentUser ? "text-right" : "text-left"}`}>
        {message.time}
      </div>
    </div>
  </div>
);

export default function ChatPage() {
  const [members, setMembers] = useState([
    {
      name: "Alice",
      message: "Hi! How are you?",
      online: true,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Bob",
      message: "Let's meet tomorrow.",
      online: false,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie",
      message: "What’s your plan for today?",
      online: true,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hi! How are you?", time: "10:00 AM" },
    { sender: "You", text: "I'm good, thanks!", time: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMember, setSelectedMember] = useState(members[0]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: "You",
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Members List */}
      <aside className="w-1/4 bg-gray-100 p-6 border-r border-gray-300 flex flex-col">
        <h2 className="text-lg font-semibold mb-6 text-gray-700">Chats</h2>

        {/* Member List */}
        <MemberList
          members={members}
          selectedMember={selectedMember}
          onMemberSelect={setSelectedMember}
        />
        
        <button className="mt-4 py-3 px-5 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600">
          Start New Chat
        </button>
      </aside>

      {/* Chat Section */}
      <main className="w-3/4 bg-gray-100 p-6 flex flex-col">
        <header className="border-b border-gray-300 pb-3 mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Chat with {selectedMember.name}
          </h2>
          <p className="text-sm text-gray-500">
            {selectedMember.online ? "Online" : "Offline"}
          </p>
        </header>

        {/* Messages Section */}
        <div className="flex-grow overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message}
              isCurrentUser={message.sender === "You"}
            />
          ))}
        </div>

        {/* Input Section */}
        <footer className="mt-4 flex items-center border-t border-gray-300 pt-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l4-4m0 0l4-4m-4 4v12"
              />
            </svg>
          </button>
        </footer>
      </main>
    </div>
  );
}
