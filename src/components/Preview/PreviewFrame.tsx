import React, { useRef, useEffect } from 'react';

interface PreviewFrameProps {
  html: string;
  css: string;
}

export function PreviewFrame({ html, css }: PreviewFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    // Create a complete HTML document with proper meta tags and viewport
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 1rem;
              font-family: system-ui, -apple-system, sans-serif;
            }
            ${css}
          </style>
        </head>
        <body>${html}</body>
      </html>
    `;

    doc.open();
    doc.write(content);
    doc.close();
  }, [html, css]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-full border-0 bg-white rounded-lg"
      title="Preview"
      sandbox="allow-same-origin allow-scripts"
    />
  );
}