import React, { useState } from 'react';
import { Code, Eye } from 'lucide-react';
import { PreviewContainer } from './Preview/PreviewContainer';
import { CodeEditor } from './CodeEditor/CodeEditor';

export function Editor() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-4 py-3 ${
            activeTab === 'preview'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-4 py-3 ${
            activeTab === 'code'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Code className="w-4 h-4" />
          Code
        </button>
      </div>

      <div className="flex-1 p-4">
        {activeTab === 'preview' ? (
          <PreviewContainer />
        ) : (
          <CodeEditor />
        )}
      </div>
    </div>
  );
}