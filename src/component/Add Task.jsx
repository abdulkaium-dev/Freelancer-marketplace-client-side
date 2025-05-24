import React from 'react';
import Swal from 'sweetalert2';

const AddTask = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    console.log(newData);

    fetch('https://marketplace-server-opal.vercel.app/datas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Task Added Successfully!',
            icon: 'success',
            confirmButtonColor: '#22c55e',
          });
        }
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Add New Task</h1>
        <form onSubmit={handleAddTask} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="taskTitle" className="block text-sm font-semibold text-gray-700 mb-1">Task Title</label>
            <input type="text" id="taskTitle" name="taskTitle" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <select id="category" name="category" required className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="">--Select Category--</option>
              <option value="web-development">Web Development</option>
              <option value="design">Design</option>
              <option value="writing">Writing</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea id="description" name="description" rows="4" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-semibold text-gray-700 mb-1">Deadline</label>
            <input type="date" id="deadline" name="deadline" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-1">Budget</label>
            <input type="number" id="budget" name="budget" min="0" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-semibold text-gray-700 mb-1">User Email</label>
            <input type="email" id="userEmail" name="email" readOnly value="user@example.com" className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed" />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-semibold text-gray-700 mb-1">User Name</label>
            <input type="text" id="userName" name="userName" readOnly value="John Doe" className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="photo" className="block text-sm font-semibold text-gray-700 mb-1">Photo</label>
            <input id="photo" name="photo" accept="image/*" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white" />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md transition-transform hover:scale-105">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
