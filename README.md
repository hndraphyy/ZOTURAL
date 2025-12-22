<p align="center">
  <img src="./public/assets/images/logo.png" alt="Zotu Logo" width="100" />
</p>

# Zotural — Admin Panel Dashboard

Zotural is a **web-based internal admin panel** designed to simulate a simple company management system.  
This application supports **two user roles (Manager & Sales Agent)** with different access levels and responsibilities, focusing on operational data management.

> ⚠️ Note: This project is **frontend-only**, and all data used is **dummy data** for portfolio and industry simulation purposes.

---

## 🌐 Live Demo
👉 <a href="https://zotu.vercel.app" target="_blank">https://zotu.vercel.app<a/>

---

## 🔑 Login Access & Roles

### Manager
- Email: `manager@gmail.com`
- Username: `manager`
- Password: `secret`

### Sales Agent
- Email: `sales@gmail.com`
- Username: `sales`
- Password: `secret`

---

## 🧑‍💼 Manager Role

### Pages & Features

#### Dashboard
- System overview and key performance metrics
- Summary of employees, products, and transactions
- General operational insights

#### Products
- Product data management
- Search by product name and stock status
- Create, view details, update, and delete products (modal-based)

#### Transactions
- List of all company transactions
- Search by customer name and sales agent
- Filter by date range and transaction status
- Transaction detail view

#### Employees
- Employee data management
- Search by employee name and filter by status
- Create, view details, update, and delete employees (modal-based)

#### Reports
- Transaction summary by selected period
- Search by sales agent name and filter by year
- Report table with export simulation (PDF)

#### Settings
- Update profile information

---

## 🧑‍💼 Sales Agent Role

### Pages & Features

#### Dashboard
- Personal sales performance overview
- Summary of recent customers and orders

#### Customers
- Customer data management
- Create, view details, update, and delete customers (modal-based)

#### Orders
- Create new orders
- Search by customer name
- Filter by date and order status
- Order detail view

#### Reports
- Personal sales reports
- Order recap by selected period
- Report table with export simulation (PDF)

#### Settings
- Update profile information

---

## 🛠️ Tech Stack
- React.js
- Vite
- Tailwind CSS
- JavaScript

---

## 🎯 Project Purpose

This project was built to:
- Simulate an **industry-style admin panel**
- Serve as a **frontend developer portfolio project**
- Practice **role-based UI rendering and access control simulation**

No real backend or database is used.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
