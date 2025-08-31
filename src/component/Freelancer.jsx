import React from "react";
import { motion } from "framer-motion";

const FreelancePlatforms = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] my-6">
      {/* Navbar */}
      <header className="flex justify-between items-center p-20 shadow-md bg-white">
        <div className="text-[#10B981] font-bold text-xl">freelancer</div>
        <nav className="space-x-6 text-[#111827]">
          <a href="#" className="hover:text-[#10B981] transition-colors">How it works</a>
          <button className="bg-[#10B981] text-white px-4 py-2 rounded hover:bg-green-500 transition-colors">
            Post a Project
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-[#F9FAFB]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How can freelancers<br /> help your business?
          </motion.h1>
          <p className="text-[#9CA3AF] text-lg">
            The possibilities are endless. Hire expert freelancers who work in every technical, professional, and creative field imaginable.
          </p>
          <button className="bg-[#10B981] text-white px-6 py-3 rounded font-medium hover:bg-green-500 transition-colors">
            Post a Project
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtz_Xrw4M7SSvRxJH9RXUS2NXuAvz5jnKSw&s"
            alt="Person with VR headset"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FreelancePlatforms;
