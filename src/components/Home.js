// Home Component
const Home = () => (
    <div>
        {/* Cover Section */}
        <header className="relative">
            <img src="/imagcover.jpeg" alt="Cover" className="w-full h-[400px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h1 className="text-4xl text-white font-bold">Find Your Dream Home</h1>
                <p className="text-white mt-2">Best properties, best prices.</p>
            </div>
        </header>

        {/* Why Choose Us */}
        <section className="py-12 bg-gray-100 text-center">
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
    </div>
);

export default Home;