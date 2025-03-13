import React, { useState } from "react";

const Home = () => {const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! I'm RE Bot. How can I help you today?" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setChatOpen(!chatOpen);
  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: "I'm here to assist you!" }]);
      setInput("");
    }
  };
  return (
    <div>
      <header className="relative">
        <img src="imgcover.jpeg" alt="Cover" className="w-full h-[400px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">Find Your Dream Property</h1>
          <p className="text-white mt-2">Best properties, best prices.</p>
        </div>
      </header>

      <section className="py-12 bg-red-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Verified Listings</h3>
            <p className="text-gray-600 mt-2">We offer 100% verified properties for rent and sale.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Best Prices</h3>
            <p className="text-gray-600 mt-2">Get the best deals on properties with competitive pricing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">Our team is always here to help you find your dream home.</p>
          </div>
        </div>
      </section>

    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Luxury Apartment</h3>
          <p className="text-gray-600 mt-2">Prime location, modern amenities, and stunning views.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Cozy Family Home</h3>
          <p className="text-gray-600 mt-2">Perfect for families, spacious and in a safe neighborhood.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Beachfront Villa</h3>
          <p className="text-gray-600 mt-2">Experience luxury living with a private beach.</p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-red-100 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto">
        <blockquote className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-gray-600 italic">"The best real estate experience I've ever had! Highly recommended."</p>
          <cite className="text-gray-800 font-semibold mt-2">- Sarah Johnson</cite>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic">"Smooth process and great support from start to finish."</p>
          <cite className="text-gray-800 font-semibold mt-2">- Michael Lee</cite>
        </blockquote>
      </div>
    </section>

    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto text-left">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">How do I list my property?</h3>
          <p className="text-gray-600">Simply click on 'Add Property' and fill out the form.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Do you charge a commission?</h3>
          <p className="text-gray-600">No, our platform is free for buyers and renters.</p>
        </div>
      </div>
    </section>

      <section className="py-12 bg-red-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Learn More About Buying a Home</h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

<div className="fixed bottom-4 right-4">
        <button onClick={toggleChat} className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
          {chatOpen ? "✖" : "💬"}
        </button>
        {chatOpen && (
          <div className="bg-white p-4 shadow-lg rounded-lg w-64 fixed bottom-16 right-4 border">
            <div className="h-48 overflow-y-auto border-b pb-2">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 ${msg.sender === "bot" ? "text-left" : "text-right"}`}>
                  <span className={`px-2 py-1 rounded-lg inline-block ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>{msg.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border p-1 flex-grow rounded-md"
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 ml-2 rounded-md">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;