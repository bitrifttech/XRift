import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';

interface CodeEditorPaneProps {
  value: string;
  onChange: (value: string) => void;
  language: 'html' | 'css';
}

export function CodeEditorPane({ value, onChange, language }: CodeEditorPaneProps) {
  const extensions = language === 'html' ? [html()] : [css()];

  return (
    <CodeMirror
      value={value}
      height="100%"
      theme={oneDark}
      extensions={extensions}
      onChange={onChange}
      className="h-full overflow-auto"
    />
  );
}