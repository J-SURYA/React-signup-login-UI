import React from "react";
import "./notFound.css";

function NotFoundPage() {
  return (
    <div className="container">
      <div className="emoji">😟</div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! It seems like a page you are looking for doesn't exist.</p>
      <p>Don't worry, you can go back to the </p>
      <br />
      <a href="./" className="logout-btn">
        Login
      </a>
    </div>
  );
}

export default NotFoundPage;
