import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, ClipboardList, Handshake, Star } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Post a Task",
    desc: "Describe what you need done in simple steps.",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Receive Offers",
    desc: "Freelancers will send you competitive bids.",
  },
  {
    icon: <CircleCheck className="w-8 h-8" />,
    title: "Hire & Collaborate",
    desc: "Choose the best freelancer and start working.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Review & Pay",
    desc: "Once complete, pay and leave a review.",
  },
];

const Platforms = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 my-10 rounded-xl">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="text-blue-600 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;

