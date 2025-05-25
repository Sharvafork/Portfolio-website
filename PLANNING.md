# 🧠 Project Planning: Developer Portfolio

## 🎯 Goal

Build a fast, visually clean, and professional developer portfolio that:
- Showcases projects with rich media (videos, screenshots, GitHub links)
- Clearly communicates skills, technologies, and services
- Is mobile-friendly, accessible, and SEO-optimized
- Uses modern React tooling (Vite, TypeScript, ShadCN UI or MUI)
- Is easy to maintain and extend

---

## Update TASK.MD and PLANNING.MD after every change

## 🗂️ Architecture & Folder Structure

/src
/assets → Static images, videos, audio
/components
/ui → All reusable MUI or ShadCN UI components
Navigation.tsx → Navbar with links
Progress.tsx → Loading progress bar
/features → (Optional for larger apps: About, Contact, Projects, etc.)
/lib
utils.ts → Helper functions (e.g., cn, formatters)
App.tsx → Main layout
main.tsx → ReactDOM + Router
index.css → Global styles (Tailwind or base CSS)

yaml
Copy
Edit

---

## 🧩 UI Guidelines

- **Use ShadCN UI or MUI only**
- Theme should reflect:
  - Developer identity
  - Modern but readable aesthetic
  - Consistent spacing and padding

---

## 🧪 Testing Philosophy

- Use **Vitest** + **React Testing Library**
- Tests for:
  - Components in `/components/ui`
  - Utility functions
- Minimum: 1 expected behavior, 1 edge case, 1 error/failure

---

## 📦 Tech Stack

| Area         | Tool/Library        |
|--------------|---------------------|
| Framework    | React (Vite + TS)   |
| UI           | ShadCN UI / MUI     |
| Styling      | Tailwind CSS / MUI  |
| Forms        | React Hook Form     |
| Testing      | Vitest, RTL         |
| Deploy       | Vercel / Netlify    |

---

## 🚀 Roadmap

1. Setup base layout (App.tsx, routes)
2. Build UI skeleton (nav, hero, about, projects, contact)
3. Add animations and transitions
4. Optimize images and performance
5. Write unit tests
6. Final polish and deploy

---

## 📎 Naming Conventions

- Components: `PascalCase`
- Hooks & utils: `camelCase`
- Folders: `kebab-case`
- Files under `/ui`: match ShadCN/MUI conventions

---

## ✍️ Developer Notes

- Keep components clean and separated
- Abstract UI into `/ui` even if used once for reuse potential
- Don't over-engineer — this is a portfolio, not an enterprise app