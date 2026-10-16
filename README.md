# Addis Restaurant

Addis Restaurant is a modern, fictional restaurant website for a dining experience inspired by Ethiopian hospitality and cuisine in Addis Ababa.

## Features

- Responsive landing page for desktop, tablet, and mobile
- Interactive menu categories and filtering
- About, gallery, opening hours, location, and contact sections
- Reservation and contact call-to-action buttons with demo-only notice
- Reusable React section structure for future backend integration

## Run locally

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Build for production:
   npm run build
4. Preview the production build:
   npm run preview

## Notes

- The reservation flow is intentionally frontend-only and clearly marked as a demo.
- The project is structured so future Node.js/Express and MySQL integration can be added for real reservations and menu management.

## Project structure

- src/App.jsx — page layout and interactive menu logic
- src/App.css — responsive styling for the full restaurant experience
- src/index.css — global reset and base theme
- README.md — local run instructions
