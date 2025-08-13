# Gemini Code Assistant Context

This document provides context for the Gemini code assistant to understand the project structure, conventions, and commands.

## Project Overview

This is an Angular project for an e-sports league website. The project is built with Angular CLI and uses TypeScript. It includes pages for Home, About, Esports, Sponsors, and Contact. The application uses lazy loading for its routes to improve performance.

## Building and Running

To get started with the project, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:4200/`.

3.  **Build the project:**
    ```bash
    npm run build
    ```
    The build artifacts will be stored in the `dist/` directory.

4.  **Run unit tests:**
    ```bash
    npm run test
    ```

## Development Conventions

*   **Code Style:** The project uses Prettier for code formatting. The configuration is in the `package.json` file.
*   **Components:** Components are organized by page in the `src/app/pages` directory. Shared components are in `src/app/shared/components`.
*   **Routing:** The main application routes are defined in `src/app/app.routes.ts`. The routes are lazy-loaded.
*   **Styling:** The project uses CSS for styling. Global styles are in `src/styles.css`. Component-specific styles are in the component's CSS file.
