
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="content">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React application.</p>
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h1>About Us</h1>
      <p>
        This application demonstrates React Router
        for navigating between different pages.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="content">
      <h1>Contact Us</h1>
      <p>Email: student@example.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h2>React Router Navigation</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
