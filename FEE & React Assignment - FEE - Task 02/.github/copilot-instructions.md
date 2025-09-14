# Copilot Instructions for FEE & React Assignment - FEE - Task 02

## Project Overview
This project is a static HTML/CSS/JS web application for managing quizzes, users, roles, and related content. It is organized as a set of standalone HTML pages, each with its own purpose (e.g., user management, quiz management, login, registration, etc.).

## Directory Structure
- `*.html`: Main pages for each feature (e.g., `user-management.html`, `quiz-management.html`).
- `assert/css/`: Stylesheets, including `style.css` (global styles) and feature-specific CSS (e.g., `quiz-management.css`).
- `assert/js/`: JavaScript files for page-specific logic (e.g., `main.js`, `quiz-management.js`).
- `assert/image/`: Static images and icons used throughout the UI.

## Key Patterns & Conventions
- **No build step**: All files are static; changes to HTML, CSS, or JS are reflected immediately in the browser.
- **Page-specific JS/CSS**: Each major HTML page may have a corresponding JS and/or CSS file in `assert/js/` and `assert/css/`.
- **No frameworks**: The project uses vanilla HTML, CSS, and JavaScript—no React or other frameworks.
- **Navigation**: Navigation between features is handled via links between HTML files.
- **Assets**: All images and icons are referenced from `assert/image/` using relative paths.

## Developer Workflow
- **Edit HTML/CSS/JS directly**; refresh browser to see changes.
- **Debugging**: Use browser dev tools (F12) for inspecting DOM, styles, and JS errors.
- **No automated tests or build tools**: Manual testing only.

## Examples
- To update quiz management logic, edit `quiz-management.html`, `assert/js/quiz-management.js`, and/or `assert/css/quiz-management.css`.
- To add a new image, place it in `assert/image/` and reference it with a relative path in HTML or CSS.

## Project-Specific Notes
- **File naming**: Use lowercase and hyphens for new HTML/JS/CSS files.
- **No external dependencies**: All code and assets are local.
- **Error pages**: `403.html` and `404.html` are present for access and not found errors.

## When in Doubt
- Follow the structure and naming of existing files.
- Reference similar pages for patterns (e.g., user management vs. quiz management).

---
_Last updated: September 14, 2025_
