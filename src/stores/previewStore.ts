import { create } from 'zustand';

interface PreviewState {
  html: string;
  css: string;
  setHtml: (html: string) => void;
  setCss: (css: string) => void;
}

export const usePreviewStore = create<PreviewState>((set) => ({
  html: `<div class="card">
  <h1>Welcome to UI Designer</h1>
  <p>Start editing the HTML and CSS to create your design!</p>
  <button class="cta-button">Get Started</button>
</div>`,
  css: `.card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  text-align: center;
}

h1 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cta-button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background: #2563eb;
}`,
  setHtml: (html) => set({ html }),
  setCss: (css) => set({ css }),
}));