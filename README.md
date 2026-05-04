# 📚 BookNest

## 🎯 Purpose
**BookNest** is a modern and user-friendly library management frontend application. Its primary purpose is to provide a seamless platform for readers to explore a curated collection of books, filter titles by categories, search for specific authors or titles, and securely borrow books using an intuitive authentication system.

## 🌐 Live URL
**Live Project Link:** https://book-nest-three-zeta.vercel.app

## ✨ Key Features
*   **Secure Authentication:** User login and registration system with both Email/Password and Google Social Login.
*   **Protected Routes:** Private routes (like Borrowing and User Profile) are secured using Next.js Middleware, ensuring only authenticated users can access them.
*   **Dynamic Search & Filtering:** Users can instantly search for books by title or author and filter the collection by categories (e.g., Science, Story, Tech).
*   **Smart Borrowing System:** Users can borrow books with a single click. The system prevents duplicate borrowing and tracks user-specific borrowed items using session-based local storage.
*   **User Dashboard:** A personalized profile page displaying the user's information and statistics of their borrowed and active books.
*   **Responsive UI:** A fully responsive, modern design tailored for both desktop and mobile devices.

## 📦 NPM Packages Used
This project utilizes several essential npm packages to enhance functionality and user experience:

*   **`next`**: The core React framework used for building the application (App Router).
*   **`react` / `react-dom`**: For building the user interfaces and components.
*   **`better-auth`**: For handling secure authentication (Email/Password and OAuth).
*   **`tailwindcss`**: A utility-first CSS framework for rapid and custom UI styling.
*   **`react-icons`**: For integrating high-quality, customizable icons (e.g., `BsBook`, `FcGoogle`, `BsSearch`).
*   **`react-hot-toast`**: For providing elegant, real-time push notifications and user feedback (e.g., success or error messages during login/borrowing).

