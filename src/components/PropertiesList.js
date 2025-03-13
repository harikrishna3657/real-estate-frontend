import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertiesList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/properties");
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Available Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <div key={property._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <img 
                                src={property.imageUrl || "https://source.unsplash.com/400x300/?house"} 
                                alt={property.title} 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">{property.title}</h3>
                            <p className="text-gray-700">💰 ${property.price}</p>
                            <p className="text-gray-700">📍 {property.location}</p>
                            <p className="text-gray-600 mt-2">{property.description}</p>
                            <p className="text-gray-600 mt-2">📞 {property.contact}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No properties available.</p>
                )}
            </div>
        </div>
    );
};

export default PropertiesList;
