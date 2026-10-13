<div align="center">

# React Tutorial

**React learning notes and examples from my self-study (2020–2021).**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

</div>

---

## Overview

This repository collects the React exercises I built while teaching myself React. It is organized as three small projects, covering core hooks, data fetching, forms and validation, and state management with Zustand.

## Contents

| Project | Topics |
| --- | --- |
| [`react-tutorial`](react-tutorial/) | `useState`, `useEffect`, `useLayoutEffect`, `useRef`, `useMemo`, `useCallback`, `useReducer`, `useContext`, custom hooks (`useLocalStorage`), and data fetching with `fetch` and SWR |
| [`react-form`](react-form/) | Login, sign-up, and product forms with React Hook Form, Zod validation, MUI, and TanStack Query |
| [`react-typescript`](react-typescript/) | Zustand stores with TypeScript: counter, bear, cat, and food examples, plus auto-generated selectors |

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React |
| Language | JavaScript, TypeScript |
| Styling | Tailwind CSS, MUI |
| Data and state | SWR, TanStack Query, Zustand |
| Forms | React Hook Form, Zod |
| Build | Create React App, Vite |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

Each folder is an independent project:

```bash
git clone https://github.com/RithyBondeth/SL-React-Tutorial.git
cd SL-React-Tutorial/react-tutorial    # or react-form, react-typescript
npm install
npm start                              # use `npm run dev` for the Vite projects
```

## Project Structure

```text
SL-React-Tutorial/
├── react-tutorial/      # Hooks and data fetching (Create React App)
├── react-form/          # Forms and validation (Vite)
└── react-typescript/    # Zustand with TypeScript (Vite)
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
