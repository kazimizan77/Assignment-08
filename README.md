# 📚 BookNest - Online Book Borrowing Platform

## 🌐 Live URL
**Live Project Link:** https://book-nest-three-zeta.vercel.app

## 🎯 Purpose
**BookNest** is a modern and user-friendly library management frontend application. Its primary purpose is to provide a seamless platform for readers to explore a curated collection of books, filter titles by categories, search for specific authors or titles, and securely borrow books using an intuitive authentication system.

## ✨ Key Features
*   **Secure Authentication:** Fully functional login and registration system using **Better-Auth**, supporting both Email/Password and Google Social Login.
*   **Database Persistence:** Integration with **MongoDB** to securely store and manage user accounts, sessions, and authentication data.
*   **Protected Routes & Middleware:** Advanced security using Next.js Middleware to protect private routes like User Profile and Book Details, ensuring only authorized access.
*   **Dynamic Inventory & Search:** Real-time search functionality by title or author and category-based filtering (e.g., Science, Tech, Story) for an effortless browsing experience.
*   **Smart Borrowing Logic:** A robust borrowing system that prevents duplicate borrows and tracks user-specific data using specialized `localStorage` keys linked to user sessions.
*   **Personalized Dashboard:** A dedicated "My Profile" page showing user details, profile pictures (with fallback avatars), and dynamic statistics of borrowed books.
*   **Premium Responsive UI:** A meticulously designed interface using Tailwind CSS and DaisyUI, featuring a custom mobile hamburger menu with integrated profile access for a premium app-like feel.

## 📦 NPM Packages Used
The following essential packages were used to build this high-performance application:

*   **`nextjs`**: The core framework for React server components and optimized routing (App Router).
*   **`better-auth`**: A comprehensive authentication library used for managing users and sessions.
*   **`mongodb`**: The official driver used to connect the application with the MongoDB database for data persistence.
*   **`tailwindcss`**: A utility-first CSS framework used for all custom styling and responsive layouts.
*   **`daisyui`**: A component library for Tailwind CSS used to build sleek UI elements like buttons and modals.
*   **`react-icons`**: For high-quality vector icons used throughout the navigation and call-to-action buttons.
*   **`react-hot-toast`**: For providing elegant, non-blocking notifications for user actions (e.g., successful borrowing, login errors).


**Install dependencies:**

    ```bash
    npm install