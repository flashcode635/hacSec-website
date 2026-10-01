import axios from 'axios';

// VITE_API_URL must be the backend origin, not the frontend origin.
// For the Netlify function deployment include its /api prefix, e.g.
// https://<backend-site>.netlify.app/api. Locally the Express app serves
// these routes at the origin root.
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
if (import.meta.env.PROD && !configuredApiUrl) {
  throw new Error(
    'VITE_API_URL is required in production so API requests are sent to the backend.'
  );
}

export const API_BASE_URL = (
  configuredApiUrl || 'http://localhost:3000'
).replace(/\/+$/, '');

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
