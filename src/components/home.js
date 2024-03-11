import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function HomePage() {
  let navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p>We're glad to have you here!</p>
      <p>Explore our services and products.</p>

      {/* Logout button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
