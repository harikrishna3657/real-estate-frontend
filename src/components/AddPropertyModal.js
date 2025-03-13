import React, { useState } from "react";
import axios from "axios"; // Import axios

const AddPropertyModal = ({ showModal, setShowModal }) => {
  const [newProperty, setNewProperty] = useState({
    location: "",
    description: "",
    price: "",
    title: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/properties", newProperty)
      .then((response) => {
        console.log("New Property Submitted:", response.data);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("There was an error submitting the property!", error);
      });
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Add Property</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={newProperty.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-semibold"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                value={newProperty.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-semibold">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={newProperty.price}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={newProperty.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-semibold">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                value={newProperty.contact}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Property
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddPropertyModal;
