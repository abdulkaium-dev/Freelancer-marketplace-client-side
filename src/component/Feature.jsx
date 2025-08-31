import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';

export const DataCard = ({ data }) => {
  const { taskTitle, category, description, deadline, budget, email, userName, photo } = data;

  return (
    <motion.div
      className="max-w-sm rounded-2xl shadow-lg bg-[#F9FAFB] overflow-hidden p-4" // border removed
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
      <h2 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>
        {taskTitle}
      </h2>
      <p className="text-sm mb-1">
        Category: <span style={{ color: "#111827" }}>{category}</span>
      </p>
      <p className="text-sm mb-1">
        Budget: <span style={{ color: "#10B981", fontWeight: "600" }}>${budget}</span>
      </p>
      <p className="text-sm mb-1">
        Deadline: <span style={{ color: "#EF4444" }}>{deadline}</span>
      </p>
      <p className="text-sm" style={{ color: "#111827" }}>{description}</p>
      <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>
        Posted by: <span style={{ fontWeight: "600", color: "#111827" }}>{userName}</span> ({email})
      </p>
    </motion.div>
  );
};

const Features = () => {
  const datas = useLoaderData();

  return (
    <div className="lg:mx-10 my-10 bg-[#F9FAFB] p-6 rounded-xl">
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: "#111827" }}>
        Features Card
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {datas.slice(0, 6).map((data) => (
          <DataCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Features;
