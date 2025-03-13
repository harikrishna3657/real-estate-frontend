import React, { useState } from "react";

const Contact = () => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    {
      id: "pre-sale",
      name: "Pre-Sale Inquiry",
      questions: [
        "Pricing details?",
        "Property availability?",
        "Payment plans?",
      ],
    },
    {
      id: "post-sale",
      name: "Post-Sale Support",
      questions: [
        "Ownership transfer?",
        "Legal documentation?",
        "Maintenance support?",
      ],
    },
    {
      id: "general",
      name: "General Inquiry",
      questions: [
        "Company details?",
        "Investment opportunities?",
        "Other queries?",
      ],
    },
  ];

  const handleSubmit = () => {
    if (!category || !query) return;
    setSubmitted(true);
    setTimeout(() => {
      setCategory("");
      setQuery("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Need Assistance?</h2>
      <p className="text-center text-gray-600 mb-4">
        Select a category and ask your question.
      </p>

      <div className="text-center mb-6">
        <p className="text-lg font-semibold">
          Contact Number: <span className="text-blue-600">+1 234 567 890</span>
        </p>
        <p className="text-lg font-semibold">
          Email:{" "}
          <a
            href="mailto:contact@realestatehub.com"
            className="text-blue-600 underline"
          >
            contact@realestatehub.com
          </a>
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 rounded-lg ${
              category === item.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } transition hover:bg-blue-500 hover:text-white`}
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {category && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Suggested Questions:</h3>
          <ul className="space-y-2">
            {categories
              .find((item) => item.id === category)
              ?.questions.map((q, index) => (
                <li
                  key={index}
                  className="bg-gray-100 px-3 py-2 rounded-md cursor-pointer hover:bg-blue-100"
                  onClick={() => setQuery(q)}
                >
                  {q}
                </li>
              ))}
          </ul>
        </div>
      )}

      {category && (
        <div className="mb-4">
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your question here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}

      {category && (
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Query
        </button>
      )}

      {submitted && (
        <p className="mt-4 text-center text-green-600 font-semibold">
          Your query has been submitted. We will get back to you soon!
        </p>
      )}
    </div>
  );
};

export default Contact;
