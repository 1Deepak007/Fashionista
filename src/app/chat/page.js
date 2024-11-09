'use client'

import { useState } from 'react';

export default function ChatPage() {
  // eslint-disable-next-line
  const [members, setMembers] = useState(['Alice', 'Bob', 'Charlie']);
  const [messages, setMessages] = useState([
    { sender: 'Alice', text: 'Hi!' },
    { sender: 'Bob', text: 'Hello!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section (Members) */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Members</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index} className="py-2 px-3 mb-2 bg-white rounded shadow">
              {member}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Chat) */}
      <div className="w-3/4 bg-white p-4 flex flex-col">
        <div className="flex-grow overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Chat</h2>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${message.sender === 'You'
                    ? 'bg-blue-500 text-white self-end'
                    : 'bg-gray-300 text-black'
                  }`}
              >
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
