import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
  const task = useLoaderData();
  const { taskTitle, category, description, deadline, budget, photo } = task;

  return (
    <div className="max-w-5xl mx-auto p-6 my-12 bg-[#F9FAFB] shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-3xl">
      
      {/* Enhanced Photo Section */}
      <div className="relative overflow-hidden rounded-2xl mb-6 group shadow-lg">
        <img
          className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:blur-[1px]"
          src={photo}
          alt={taskTitle}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <p className="text-white text-2xl font-semibold text-center px-4">{taskTitle}</p>
        </div>
      </div>

      {/* Task Title */}
      <h2 className="text-4xl font-extrabold text-[#111827] mb-4">{taskTitle}</h2>

      {/* Task Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="text-lg">
          <span className="block font-semibold text-[#9CA3AF]">Category</span>
          <span className="text-[#111827] font-medium">{category}</span>
        </div>
        <div className="text-lg">
          <span className="block font-semibold text-[#9CA3AF]">Budget</span>
          <span className="text-[#10B981] font-bold">${budget}</span>
        </div>
        <div className="text-lg">
          <span className="block font-semibold text-[#9CA3AF]">Deadline</span>
          <span className="text-red-500">{deadline}</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold text-[#111827] mb-2">Description</h3>
        <p className="text-base text-[#111827] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
