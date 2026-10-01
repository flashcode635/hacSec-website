import axios from 'axios';

// VITE_API_URL must be the backend origin, not the frontend origin.
// For the Netlify function deployment include its /api prefix, e.g.
// https://<backend-site>.netlify.app/api. Locally the Express app serves
// these routes at the origin root.
export const API_BASE_URL = "/api";
export const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
