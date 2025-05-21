import { Link } from "react-router";
import Box from "../../public/subs_box.json"


const Feature= () => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Subscription Services</h2>

        <div className="grid grid-cols-1 bg-yellow-50  sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {Box.map((service) => (
            <SubscriptionCard key={service.id} service={service} />
          ))}
        </div>
     
    </div>
  );
};

export default Feature;