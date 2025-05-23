import React from 'react';

const Update = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Update Task</h2>
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              name="taskTitle"
              placeholder="Task Title"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Write a short description..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
            <input
              type="number"
              id="budget"
              name="budget"
              placeholder="e.g., 500"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              readOnly
              value="user@example.com"
              className="mt-1 block w-full p-3 border bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              readOnly
              value="John Doe"
              className="mt-1 block w-full p-3 border bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
