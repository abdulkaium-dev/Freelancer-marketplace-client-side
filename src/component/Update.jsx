import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const { _id, taskTitle, description, deadline, budget } = useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    await fetch(`https://marketplace-server-opal.vercel.app/datas/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });

    Swal.fire({
      icon: 'success',
      title: 'Task Updated Successfully!',
      text: 'Your task has been updated.',
      confirmButtonColor: '#10B981',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-8">Update Task</h2>
        <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="taskTitle" className="block text-sm font-semibold text-[#111827]">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              name="taskTitle"
              defaultValue={taskTitle}
              className="mt-1 block w-full p-3 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold text-[#111827]">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              defaultValue={description}
              className="mt-1 block w-full p-3 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            ></textarea>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-[#111827]">Budget</label>
            <input
              type="number"
              id="budget"
              name="budget"
              defaultValue={budget}
              className="mt-1 block w-full p-3 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-[#111827]">Deadline</label>
            <input
              type="date"
              id="date"
              name="date"
              defaultValue={deadline}
              className="mt-1 block w-full p-3 border border-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-semibold text-[#111827]">User Email</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              readOnly
              value="user@example.com"
              className="mt-1 block w-full p-3 border bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-semibold text-[#111827]">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              readOnly
              value="John Doe"
              className="mt-1 block w-full p-3 border bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#10B981] text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
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
