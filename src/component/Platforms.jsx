import React from 'react';
import { CircleCheck, ClipboardList, Handshake, Star } from "lucide-react";

const steps = [
  { icon: <ClipboardList />, title: "Post a Task", desc: "Describe what you need done in simple steps." },
  { icon: <Handshake />, title: "Receive Offers", desc: "Freelancers will send you competitive bids." },
  { icon: <CircleCheck />, title: "Hire & Collaborate", desc: "Choose the best freelancer and start working." },
  { icon: <Star />, title: "Review & Pay", desc: "Once complete, pay and leave a review." },
];
const Platforms = () => {
  return (
     <section className="py-12 px-4 bg-gray-100 my-10 rounded-xl">
      <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-blue-500 mb-3">{step.icon}</div>
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;
<h1>sams</h1>