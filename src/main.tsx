import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import Contact from './contact.tsx'
import Projects from './projects.tsx';
import Navigation from './components/Navigation';
import { ThemeProvider } from './components/ui/ThemeProvider';

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

const body = document.querySelector('body');
if (body) {
    body.classList.add('loaded');
}