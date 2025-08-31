import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center justify-center flex-1 space-y-8 py-20 px-4">
                {/* 404 Image */}
                <img
                    className="w-80 h-80 object-contain mx-auto"
                    src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                    alt="404 Not Found"
                />

                {/* 404 Text & Button */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-semibold text-[#111827]">404 - Page Not Found</h1>
                    <p className="text-[#9CA3AF]">Oops! The page you are looking for doesn't exist.</p>
                    <Link to="/">
                        <button className="mt-4 px-6 py-3 bg-[#10B981] text-white rounded-lg font-semibold hover:bg-green-600 transition">
                            Go Back Home
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Error;
