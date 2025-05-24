import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
  const task = useLoaderData();
  const { taskTitle, category, description, deadline, budget, photo } = task;

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-xl rounded-xl">
      <img
        className="w-full h-64 object-cover rounded-xl mb-6"
        src={photo}
        alt={taskTitle}
      />
      <h2 className="text-3xl font-bold mb-4">{taskTitle}</h2>
      <p className="text-lg mb-2">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-lg mb-2">
        <strong>Budget:</strong>{' '}
        <span className="text-green-600 font-semibold">${budget}</span>
      </p>
      <p className="text-lg mb-2">
        <strong>Deadline:</strong>{' '}
        <span className="text-red-500">{deadline}</span>
      </p>
      <p className="text-base mb-4 text-gray-700">{description}</p>
    </div>
  );
};

export default TaskDetails;


