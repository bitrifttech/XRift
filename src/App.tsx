import React from 'react';
import { ChatWindow } from './components/ChatWindow';
import { Editor } from './components/Editor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">UI Designer</h1>
          <p className="text-gray-600">Design beautiful interfaces with AI assistance</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
          <Editor />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;