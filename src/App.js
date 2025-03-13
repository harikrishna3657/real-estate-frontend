import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaHome, FaPhone, FaList, FaPlus } from "react-icons/fa";
import PropertiesList from "./components/PropertiesList";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AddPropertyModal from "./components/AddPropertyModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="font-sans text-gray-800">
        {/* Advanced Navbar */}
        <nav className="bg-navbar text-white shadow-md sticky top-0 z-10 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-bold flex items-center">
              <FaHome className="mr-2" /> Real Estate Hub
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="flex items-center hover:text-gray-300">
                  <FaHome className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="flex items-center hover:text-gray-300">
                  <FaList className="mr-1" /> Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-gray-300">
                  <FaPhone className="mr-1" /> Contact
                </Link>
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-500 flex items-center px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              <FaPlus className="mr-2" /> Add Property
            </button>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <AddPropertyModal showModal={showModal} setShowModal={setShowModal} />

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} Real Estate Hub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;