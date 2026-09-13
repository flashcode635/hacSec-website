# Task List

## 1. Documentation & Task Tracking Setup
- [x] Create `tasklist.md` with all planned tasks.
- [x] Create `decisions.md` with decisions, trade-offs, and file modifications.

## 2. Backend Setup & Clean Up
- [x] Remove legacy `SignupAuthBackend` directory.
- [x] Create `server/index.js` with Express, CORS, JWT authentication endpoints (`/signup`, `/login`, `/me`).
- [x] Support JWT token generation with 1d expiration.
- [x] Add backend test cases (`server/server.test.js`).

## 3. Navbar & Global Auth State Management
- [x] Create global auth state/context or Recoil atom for user authentication state (`src/state/authState.js`).
- [x] Update `Navbar.jsx` to render profile icon sphere with the first letter of user's name when authenticated.
- [x] Add dropdown menu to profile icon displaying user email/name, tier status ("Human / Free"), and Logout action.
- [x] Handle persistent authentication using JWT from `localStorage`.

## 4. Auth Flow Integration in Learn_X & Subscription Section
- [x] Update Subscription `PayCardsSection.jsx` tier buttons ("Free trial", "$5/month", "$15/month") to open Auth modal.
- [x] Create Auth Modal component supporting both Sign In and Sign Up modes (`AuthModal.jsx`).
- [x] Connect modal to backend endpoints at `http://localhost:3001`.
- [x] Ensure successful auth saves JWT in `localStorage` and updates global user state without navigating away from `/Learn_X`.

## 5. Route Cleanup & Dashboard Removal
- [x] Remove `/dashboard` route and related imports/routes from `App.jsx`.
- [x] Ensure `/Learn_X` is the single landing page and application view for all users.

## 6. Courses Page Visual Improvements
- [x] Inspect and improve `/courses` card styling, layout alignment, and visual appeal.

## 7. Testing & Verification
- [x] Run backend unit/integration tests (`node server/server.test.js`).
- [x] Run full frontend production build test (`npm run build`).

## 8. Pre-Commit Steps
- [ ] Execute pre-commit checks and verification steps.

## 9. Submission
- [ ] Finalize code and submit changes.
