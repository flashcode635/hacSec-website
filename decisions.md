# Architecture & Design Decisions

## Overview
This document records key design decisions, trade-offs, and file modifications made during the implementation of the Learn_X Authentication & Subscription Flow.

---

## Decisions & Trade-offs

### 1. Dedicated Express Server (`server/index.js`) vs In-Memory Mocking
- **Decision**: Created a clean Express server in `server/index.js` on port 3001 and removed the old `SignupAuthBackend` folder.
- **Why**: The previous backend in `SignupAuthBackend/backLogic.js` lacked JWT token signing and verification endpoints (`/me`). A modular server cleanly separates backend concerns and standardizes token management.
- **Trade-off**: Requires running a separate backend process during development or testing, but provides actual JWT security and REST APIs.

### 2. Embedded Auth Modal vs Dedicated `/auth` Page
- **Decision**: Embedded a modal auth flow triggered directly from the Subscription tier action buttons on `/Learn_X`.
- **Why**: Eliminates disruptive page redirects, allowing users to authenticate directly within the subscription section of `/Learn_X` as requested.
- **Trade-off**: Slightly increases component complexity in the Subscription section, but significantly improves UX.

### 3. Default "Human" (Free) Tier Assignment
- **Decision**: All newly registered or authenticated users default to the "Human" (Free) tier.
- **Why**: Matches user requirement: "Upon signing up or signing in, should the user default to the 'Human' (Free) tier only."

### 4. Removal of `/dashboard` Route
- **Decision**: Removed `/dashboard` and nested dashboard routes from `App.jsx`, redirecting legacy requests to `/Learn_X`.
- **Why**: `/Learn_X` is now both the public landing page and the authenticated experience.

### 5. Profile Icon Sphere in Navbar
- **Decision**: Added a circular avatar displaying the user's first initial, with a dropdown menu displaying user details, tier badge ("Human"), and Logout button.
- **Why**: Fulfills requirements: "show first letter of his name in the profile icon sphere. Also when click the icon there should be an options like tier and logout (clear the jwt token, reset states then log user out)."

---

## File Changes Log
- `tasklist.md`: Created and updated to track task execution progress.
- `decisions.md`: Created and updated to document architectural choices and file updates.
- `server/index.js`: Created Express backend with JWT endpoints (`/signup`, `/login`, `/me`).
- `server/server.test.js`: Created test suite verifying signup, login, JWT token issuance, and token decoding on `/me`.
- `SignupAuthBackend/`: Removed legacy backend directory.
- `src/state/authState.js`: Created Recoil atom `userState` for managing user authentication and JWT token globally.
- `src/site/navbar/navbar.jsx`: Updated to check `localStorage` token on mount via `/me`, render profile initial sphere, and render dropdown menu with tier and logout.
- `src/site/Subscription/payment.jsx`: Updated tier action buttons ("Free trial", "$5/month", "$15/month") to open AuthModal for unauthenticated users.
- `src/site/signUpAuth/AuthModal.jsx` & `authModal.css`: Created sleek authentication modal for Sign In / Sign Up.
- `src/App.jsx`: Cleaned up routes, removed `/dashboard` and `/auth` routes and redirected to `/Learn_X`.
- `src/site/cources/courses.jsx` & `courses.css`: Improved card styling, grid responsiveness, and typography.
