import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const token = localStorage.getItem('token');

  const fetchMessages = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/chat/messages`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, [token]); // ✅ Add token as dependency

  const sendMessage = async () => {
  if (!newMessage.trim()) return;

  const currentTime = new Date().toISOString(); // ✅ Get current time

  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/chat/send`, 
      { message: newMessage, time: currentTime }, //  Send both messages and time
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    setNewMessage('');
    fetchMessages();
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
};

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [fetchMessages]); //  Now dependenc is satisfied

  return (
    <div className="p-6 max-w-xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Live Chat</h1>

      <div className="border p-4 h-96 overflow-y-scroll bg-gray-100 rounded mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
  <span className="font-semibold">{msg.name}:</span> {msg.message}
</div>

        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded mr-2"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
