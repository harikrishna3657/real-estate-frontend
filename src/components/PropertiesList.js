import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertiesList = () => {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/properties")
            .then((response) => setProperties(response.data))
            .catch(() => setProperties([]));
    }, []);

    const filteredProperties = properties.filter(({ title, location, description }) => 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Available Properties</h2>
            
            <div className="mb-6">
                <input 
                    type="text" 
                    placeholder="Search properties..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProperties.map(({ _id, title, price, location, description, contact }) => (
                        <div key={_id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <img src="availableprop.jpeg" alt="Cover" className="w-full h-[200px] object-cover" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-700">Price: ${price}</p>
                                <p className="text-gray-700">Location: {location}</p>
                                <p className="text-gray-600">{description}</p>
                                <p className="text-gray-600">Contact: {contact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No properties found.</p>
            )}
        </div>
    );
};

export default PropertiesList;
