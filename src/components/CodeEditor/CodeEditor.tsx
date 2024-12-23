import React, { useState } from 'react';
import { CodeEditorTabs } from './CodeEditorTabs';
import { CodeEditorPane } from './CodeEditorPane';
import { usePreviewStore } from '../../stores/previewStore';

export function CodeEditor() {
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const { html, css, setHtml, setCss } = usePreviewStore();

  return (
    <div className="h-full flex flex-col bg-[#282c34] rounded-lg overflow-hidden">
      <CodeEditorTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1">
        {activeTab === 'html' ? (
          <CodeEditorPane
            value={html}
            onChange={setHtml}
            language="html"
          />
        ) : (
          <CodeEditorPane
            value={css}
            onChange={setCss}
            language="css"
          />
        )}
      </div>
    </div>
  );
}