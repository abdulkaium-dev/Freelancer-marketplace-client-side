import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from 'framer-motion';

export const DataCard = ({ data }) => {
  const { _id, taskTitle, category, description, deadline, budget, email, userName, photo } = data;

  return (
    <motion.div
      className="max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden p-4 border border-[#E5E7EB]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="w-full h-48 object-cover rounded-xl mb-4"
        src={photo}
        alt={taskTitle}
      />
      <h2 className="text-xl font-bold mb-2 text-[#111827]">{taskTitle}</h2>
      <p className="text-sm text-[#9CA3AF] mb-1">
        Category: <span className="text-[#111827]">{category}</span>
      </p>
      <p className="text-sm text-[#9CA3AF] mb-1">
        Budget: <span className="text-[#10B981] font-semibold">${budget}</span>
      </p>
      <p className="text-sm text-[#9CA3AF] mb-1">
        Deadline: <span className="text-red-500">{deadline}</span>
      </p>
      <p className="text-sm text-[#111827] mb-2">{description}</p>
      <p className="text-xs text-[#9CA3AF] mb-3">
        Posted by: <span className="font-semibold text-[#111827]">{userName}</span> ({email})
      </p>
      <Link to={`/details/${_id}`}>
        <button
          className="w-full md:w-auto bg-[#10B981] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          type="button"
        >
          See details
        </button>
      </Link>
    </motion.div>
  );
};

const BrowseTasks = () => {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div className="lg:mx-10 my-10 bg-[#F9FAFB] p-6 rounded-xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#111827]">
        All Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {datas.map((data) => (
          <DataCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
