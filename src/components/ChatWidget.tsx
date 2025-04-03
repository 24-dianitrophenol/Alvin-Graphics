import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the message submission
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#0f09fb] text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            {/* Header */}
            <div className="bg-[#0f09fb] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with Alvin</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="bg-[#0f09fb] text-white p-3 rounded-lg inline-block mb-4">
                Hello! How can I help you with your design needs?
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#0f09fb]"
                />
                <button
                  type="submit"
                  className="bg-[#f95006] text-white p-2 rounded-lg hover:bg-[#e64600] transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;