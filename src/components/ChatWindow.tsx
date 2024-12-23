import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

export function ChatWindow() {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Design Assistant
        </h2>
      </div>
      
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Messages will go here */}
      </div>

      <div className="p-4 border-t">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Describe your design needs..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}