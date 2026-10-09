import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";

import { ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <ToastContainer />

        <header className="header">
          <div className="header-left">
            <button className="menu-btn">
              <i className="fa-solid fa-bars" />
            </button>
            <div>
              <h1>Dashboard</h1>
              <p>Welcome back, Anjali! Here's what's happening today.</p>
            </div>
          </div>
          <div className="header-right">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass" />
              <input type="text" placeholder="Search anything..." />
            </div>
            <button className="header-icon">
              <i className="fa-regular fa-bell" />
              <span className="notification-dot" />
            </button>
            <div className="profile">
              <div className="profile-avatar">AS</div>
              <div className="profile-info">
                <strong>Anjali Singh</strong>
                <span>Admin</span>
              </div>
              <i className="fa-solid fa-chevron-down" />
            </div>
          </div>
        </header>

        {children}
      </main>
    </>
  );
}

export default Layout;
