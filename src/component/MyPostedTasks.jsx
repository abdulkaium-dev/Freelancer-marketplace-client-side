import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyPostedTasks = () => {
  const datas = useLoaderData();

  // Initialize tasks with bids defaulted to 0 if missing
  const [allTasks, setAllTasks] = React.useState(
    datas.map(task => ({ ...task, bids: typeof task.bids === 'number' ? task.bids : 0 }))
  );

  // Calculate total bids count dynamically on each render
  const bidsCount = allTasks.reduce((acc, task) => acc + task.bids, 0);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marketplace-server-opal.vercel.app/datas/${_id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setAllTasks(prev => prev.filter(task => task._id !== _id));
            } else {
              Swal.fire("Error!", "Failed to delete the task.", "error");
            }
          })
          .catch(() => Swal.fire("Error!", "Failed to delete the task.", "error"));
      }
    });
  };

  const handleBid = (_id) => {
    setAllTasks(prev =>
      prev.map(task =>
        task._id === _id ? { ...task, bids: task.bids + 1 } : task
      )
    );
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-4 px-4 my-10">
      <h3 className="text-xl font-semibold mb-8 text-center text-[#111827]">
        You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h3>

      <div className="flex flex-col items-center gap-6">
        {allTasks.map(task => (
          <div
            key={task._id}
            className="w-full max-w-lg p-6 rounded-2xl shadow-lg bg-white border border-[#E5E7EB]"
          >
            <h2 className="text-2xl font-bold mb-2 text-[#111827]">{task.title}</h2>
            <p className="text-[#9CA3AF] mb-1"><strong>Description:</strong> {task.description}</p>
            <p className="text-[#9CA3AF] mb-1"><strong>Budget:</strong> <span className="text-[#10B981]">${task.budget}</span></p>
            <p className="text-[#9CA3AF] mb-1"><strong>Due Date:</strong> <span className="text-red-500">{task.dueDate}</span></p>
            <p className="text-[#9CA3AF] mb-4"><strong>Bids:</strong> <span className="font-semibold text-[#111827]">{task.bids}</span></p>

            <div className="flex flex-wrap gap-3">
              <Link to={`/update/${task._id}`}>
                <button className="px-4 py-2 bg-[#10B981] text-white rounded-lg hover:bg-green-600 transition-colors">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(task._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => handleBid(task._id)}
                className="px-4 py-2 bg-[#10B981] text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Place Bid
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedTasks;
