import React from 'react';
import { useLoaderData } from 'react-router-dom'; // ✅ Fixed import

const TaskDetails = () => {
  const task = useLoaderData(); // ✅ Loaded task from route loader

  if (!task) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <img
        src={task.photo}
        alt={task.taskTitle}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{task.taskTitle}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {task.category}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Description:</strong> {task.description}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Deadline:</strong>{' '}
        <span className="text-red-500">{task.deadline}</span>
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Budget:</strong>{' '}
        <span className="text-green-600">${task.budget}</span>
      </p>
      <p className="text-gray-600 mt-4">
        <strong>Posted By:</strong> {task.userName} ({task.email})
      </p>
    </div>
  );
};

export default TaskDetails;

