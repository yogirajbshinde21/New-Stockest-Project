import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your Stockest AI assistant. I can help you with questions about stock trading and our platform. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = {
      type: 'user',
      content: input
    };
  
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
  
    try {
      const response = await fetch('http://localhost:3002/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: input
        })
      });
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
  
      const botMessage = {
        type: 'bot',
        content: data.message
      };
  
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        type: 'bot',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later.'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  
    setIsLoading(false);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <MessageSquare className="me-2" size={20} />
                Stockest AI Assistant
              </h5>
            </div>
            <div className="card-body" style={{ height: '500px', overflowY: 'auto' }}>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.type === 'user' ? 'text-end' : ''} mb-3`}
                  >
                    <div
                      className={`d-inline-block p-3 rounded-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-light'
                      }`}
                      style={{ maxWidth: '75%', textAlign: 'left' }}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="message mb-3">
                    <div className="d-inline-block p-3 rounded-3 bg-light">
                      Typing...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ask about stock trading..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSend}
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;