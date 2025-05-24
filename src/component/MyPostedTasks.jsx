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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marketplace-server-opal.vercel.app/datas/${_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
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
          .catch(err => {
            console.error(err);
            Swal.fire("Error!", "Failed to delete the task.", "error");
          });
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
    <div>
      <h3 className="text-lg font-semibold mb-4 lg:px-10 px-5">
        You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}.
      </h3>

      {allTasks.map(task => (
        <div key={task._id} className="p-4 rounded-2xl shadow-md bg-black text-white max-w-md mx-auto my-4">
          <h2 className="text-xl font-bold mb-2">{task.title}</h2>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Budget:</strong> ${task.budget}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          <p><strong>Bids:</strong> {task.bids}</p>
          <div className="flex gap-2 mt-4">
            <Link to={`/update/${task._id}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(task._id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => handleBid(task._id)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Place Bid
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostedTasks;

