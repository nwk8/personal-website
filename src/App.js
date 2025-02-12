import React from "react";
import { Link, Element } from "react-scroll";
import logo from "./logo.svg";
import "./App.css"; // Keep existing styles
import Avatar from "./components/Avatar"; // Import Avatar


function App() {
  return (
    <div className="app-container flex">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-24 bg-gray-900 text-white flex flex-col items-center py-10 space-y-4">
        <Link to="about" smooth={true} duration={500}>
          <button className="nav-button">About</button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="nav-button">Projects</button>
        </Link>
        <Link to="education" smooth={true} duration={500}>
          <button className="nav-button">Education</button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="nav-button">Contact</button>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="ml-28 flex-1">
        {/* About Section with Spinning Logo */}
        <Element name="about" className="section bg-blue-300 h-screen flex flex-col justify-center items-center text-center p-6">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="text-4xl font-bold mt-5">About Me</h1>
  <img 
    src="https://api.dicebear.com/7.x/adventurer/svg?seed=neema" 
    alt="Profile"
    className="w-40 h-40 mt-5 rounded-full border-4 border-white animate-bounce"
  />
  <p className="mt-5 text-lg w-3/4">
    Hi, I'm <strong>Neema</strong>, a passionate <span className="text-blue-800 font-semibold">Front-End Developer</span>.  
    I love creating visually stunning and user-friendly web experiences using <span className="text-blue-800 font-semibold">React, Tailwind CSS, and JavaScript</span>.  
    When I'm not coding, I enjoy exploring new UI/UX trends and optimizing web performance!
  </p>
</Element>


        {/* Projects Section */}
        <Element name="projects" className="section bg-green-300 h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </Element>

        {/* Education Section */}
        <Element name="education" className="section bg-yellow-300 h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold">Education</h1>
        </Element>

        {/* Contact Section */}
        <Element name="contact" className="section bg-red-300 h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold">Contact</h1>
        </Element>
      </div>
    </div>
  );
}

export default App;
