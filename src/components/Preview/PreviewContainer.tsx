import React from 'react';
import { PreviewFrame } from './PreviewFrame';
import { usePreviewStore } from '../../stores/previewStore';

export function PreviewContainer() {
  const { html, css } = usePreviewStore();

  return (
    <div className="h-full rounded-lg overflow-hidden">
      <PreviewFrame html={html} css={css} />
    </div>
  );
}