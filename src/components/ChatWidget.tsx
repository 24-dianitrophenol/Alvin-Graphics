import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#f95006] hover:bg-[#e04e00] text-white p-4 rounded-full shadow-lg transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-40">
          <div className="bg-[#284a95] text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Alvin Graphics</h3>
            <p className="text-sm text-blue-100">We're here to help!</p>
          </div>

          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm text-gray-700">
                Hi! How can we help you with your design needs today?
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f95006] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#f95006] hover:bg-[#e04e00] text-white p-2 rounded-lg transition-colors duration-300"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
