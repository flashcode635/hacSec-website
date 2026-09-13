import axios from 'axios';

// Single source of truth for the backend URL.
// - In dev, this falls back to the local Express server (server/index.js).
// - In any deployed build, set VITE_API_URL (in .env and in your host's
//   environment variable settings) to the real backend URL.
// This replaces the hardcoded "http://localhost:3001" / onrender.com
// URLs that used to be duplicated across AuthModal.jsx, front.jsx and
// navbar.jsx.
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
