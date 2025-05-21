import { Link } from "react-router";
import { Star } from 'lucide-react';

const FeatureCard = () => {
  return (
    <h1></h1>
  );
};

const Features = () => {

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 mb-10">
      <img
        src="/path-to-your-image.png"
        alt="Web development illustration"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500 font-medium mb-1">Development & IT</p>
        
        <h2 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
          Web development, with HTML, CSS, JavaScript and PHP
        </h2>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <div className="flex items-center text-yellow-500 mr-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1">4.5</span>
          </div>
          <span className="ml-1 text-gray-400">(2 Reviews)</span>
        </div>

        <div className="flex items-center justify-between">
         
          <span className="text-sm text-gray-800 font-semibold">Starting at: <span className="text-blue-600">$69</span></span>
        </div>
      </div>
    </div>
  );
};

export default Features;


// <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Subscription Services</h2>

//         <div className="grid grid-cols-1 bg-yellow-50  sm:grid-cols-2 md:grid-cols-3 gap-8 ">
//           {Box.map((service) => (
//             <SubscriptionCard key={service.id} service={service} />
//           ))}
//         </div>
     
//     </div>