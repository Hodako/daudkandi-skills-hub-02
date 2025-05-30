
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Add AI preset to the message
      const aiPreset = "You are Jamu, an AI assistant from Daudkandi TTC (Technical Training Center). You were trained by Master BanguBustard. You help students and visitors with information about our graphics design courses, NSDA certification, and training programs. Always be helpful and professional. ";
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAB1Wv_X7KvUqWKp9vmJ4eEghX40eHc1Ko`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: aiPreset + input
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = { 
        role: 'assistant' as const, 
        content: data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not process your request.'
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50 mx-2 md:mx-0">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <i className="fas fa-robot text-xl"></i>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] h-96 mx-2 md:mx-0 animate-fade-in">
      <Card className="h-full flex flex-col shadow-2xl border-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-3">
          <CardTitle className="text-sm flex justify-between items-center font-roboto">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Jamu - AI Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 transition-colors"
            >
              <i className="fas fa-times"></i>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-3 overflow-hidden flex flex-col bg-gray-50 dark:bg-gray-800">
          <div className="flex-1 overflow-y-auto space-y-3 mb-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 text-xs mt-4">
                <i className="fas fa-comment-dots text-2xl mb-2 block"></i>
                Hi! I'm Jamu from Daudkandi TTC. Ask me anything about our courses!
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`text-xs p-3 rounded-lg shadow-sm ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white ml-4 animate-slide-in-right' 
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-4 border animate-slide-in-left'
              }`}>
                <div className="font-medium mb-1 opacity-75">
                  {message.role === 'user' ? 'You' : 'Jamu'}
                </div>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-4 p-3 rounded-lg text-xs border animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>Jamu is thinking...</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-xs bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              size="sm"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeminiChat;
