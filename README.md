# 🚀 React Router Project

This project is aimed at understanding React Router v6 by implementing navigation between multiple pages. The application allows users to navigate between 🏠 Home, ℹ️ About, 🛒 Products, and 🔑 Login pages. After logging in, users are redirected to a 📌 Dashboard displaying a personalized greeting. The Products page showcases a list of home furniture items, each with a "More Info" link that navigates to a detailed page displaying the product's 🖼️ image and 🆔 ID using route parameters.

## ✨ Features
- 🏠 Navigation between Home, About, Products, and Login pages
- 🔑 Login functionality that redirects users to the Dashboard
- 🔄 Dynamic routing using URL parameters for product details
- ⚡ React Router v6 implementation for seamless navigation

## 🛠 Installation Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ashay-patil/React-Router-Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-Router-Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure
```
react-router-v6-project/
│── public/
│── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   ├── ProductedRoute.jsx
│   │   ├── SharedLayout.jsx
│   │   ├── SingleProduct.jsx
│   │   ├── StyledNavbar.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   ├── main.jsx
│── .gitignore
│── package-lock.json
│── package.json
│── README.md
```

## 🔀 Routing Setup
Routes are configured using `react-router-dom` and include:
- 🏠 `/` → Home Page
- ℹ️ `/about` → About Page
- 🛒 `/products` → Products Page (displays a list of home furniture)
- 🔍 `/products/:id` → Product Details Page (displays image and ID of selected product)
- 🔑 `/login` → Login Page (redirects to Dashboard on successful login)
- 📌 `/dashboard` → Dashboard Page (accessible after login)

## 🎯 Usage
- Click on navigation links to move between pages.
- Login using the form on the Login page, which redirects to the Dashboard.
- Visit the Products page to see a list of home furniture.
- Click "More Info" on a product to view details like an 🖼️ image and 🆔 product ID.

## 📦 Dependencies
- ⚛️ React
- 🔀 React Router DOM

## 🎨 Styling
This project contains minimal CSS styling, as the main focus is to understand the fundamentals of React Router v6.

🚀 Happy Coding !!