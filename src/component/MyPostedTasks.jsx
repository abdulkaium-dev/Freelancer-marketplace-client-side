import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyPostedTasks = () => {
  
  const handleDelete =(_id)=>{
    console.log (_id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});


  }

    return (
          <div className="p-4 rounded-2xl shadow-md bg-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">Freelance projects across fields</h2>
      <p className="text-gray-700"><strong>Description:</strong> Compete with other freelancers for jobs.</p>
      <p className="text-gray-700"><strong>Budget:</strong> $5000</p>
      <p className="text-gray-700"><strong>Due Date:</strong> 2025-05-23</p>
      <div className="flex gap-2 mt-4">
        <Link to='/update'><button
        //   onClick={() => onUpdate(task.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button></Link>
        <button
          onClick={() => handleDelete(_id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Bids
        </button>
      </div>
    </div>
    );
};

export default MyPostedTasks;
