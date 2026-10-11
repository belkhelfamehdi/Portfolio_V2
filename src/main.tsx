import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { isPrerender } from './constants/runtime'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (!isPrerender) {
  createRoot(document.getElementById('root')!).render(app)
}

// Build-time only: vite-prerender-plugin calls this and injects the HTML into #root.
// createRoot then replaces that markup, so the client behaves exactly as without prerendering.
export async function prerender() {
  // The .edge build: the default browser build opens a MessageChannel that keeps the Node build process alive
  const { renderToString } = await import('react-dom/server.edge')
  return { html: renderToString(app) }
}
