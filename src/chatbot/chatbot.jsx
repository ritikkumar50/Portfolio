import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineMessage, AiOutlineClose } from 'react-icons/ai';

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/ask', { message: input });
      const botReply = { sender: 'bot', text: res.data.reply };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      console.error('Chat error:', err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3 items-end">
      {isOpen ? (
        <div className="w-80 h-[480px] bg-white shadow-xl rounded-xl flex flex-col border">
          <div className="bg-purple-600 text-white p-3 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-4">
                <img src="/myportfolio/src/assets/Robo_logo/Chatbot.png" alt="Robot" className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Chat Support</h2>
              </div>
              <div className="flex items-center gap-1 ml-7 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-white/80">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded ${msg.sender === 'user' ? 'bg-purple-100 text-right' : 'bg-gray-200'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-3 border-t">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-grow border p-2 rounded"
              placeholder="Ask me something..."
            />
            <button onClick={sendMessage} className="bg-purple-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <AiOutlineMessage size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBotWidget;