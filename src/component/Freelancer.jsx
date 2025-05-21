import React from "react";

const platforms = [
  { name: "Fiverr", color: "text-green-600" },
  { name: "Upwork", color: "text-green-500" },
  { name: "Toptal", color: "text-blue-600" },
  { name: "Freelancer", color: "text-blue-500" },
  { name: "PeoplePerHour", color: "text-orange-500" },
  { name: "99designs", color: "text-red-500" },
];

export default function FreelancePlatforms  () {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-5xl w-full relative">
    
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-yellow-400 flex items-center justify-center text-4xl sm:text-6xl shadow-inner">
            👨‍💻
          </div>
        </div>

        {/* Platforms grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`bg-gray-100 rounded-xl p-4 flex items-center justify-center font-semibold text-lg sm:text-xl shadow-md ${platform.color}`}
            >
              {platform.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

