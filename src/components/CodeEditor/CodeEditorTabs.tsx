import React from 'react';
import { FileCode, Code2 } from 'lucide-react';

interface CodeEditorTabsProps {
  activeTab: 'html' | 'css';
  onTabChange: (tab: 'html' | 'css') => void;
}

export function CodeEditorTabs({ activeTab, onTabChange }: CodeEditorTabsProps) {
  return (
    <div className="flex border-b border-[#393f4a]">
      <button
        onClick={() => onTabChange('html')}
        className={`flex items-center gap-2 px-4 py-2 ${
          activeTab === 'html'
            ? 'border-b-2 border-blue-500 text-blue-500'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <FileCode className="w-4 h-4" />
        HTML
      </button>
      <button
        onClick={() => onTabChange('css')}
        className={`flex items-center gap-2 px-4 py-2 ${
          activeTab === 'css'
            ? 'border-b-2 border-blue-500 text-blue-500'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Code2 className="w-4 h-4" />
        CSS
      </button>
    </div>
  );
}