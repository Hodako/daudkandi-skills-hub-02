
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
                  text: input
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
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
        >
          <i className="fas fa-robot text-xl"></i>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 h-96">
      <Card className="h-full flex flex-col">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg p-3">
          <CardTitle className="text-sm flex justify-between items-center">
            <span>AI Assistant</span>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-700"
            >
              <i className="fas fa-times"></i>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-3 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-2 mb-3">
            {messages.map((message, index) => (
              <div key={index} className={`text-sm p-2 rounded ${
                message.role === 'user' ? 'bg-blue-100 ml-4' : 'bg-gray-100 mr-4'
              }`}>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 mr-4 p-2 rounded text-sm">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Thinking...
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border rounded text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              size="sm"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeminiChat;
