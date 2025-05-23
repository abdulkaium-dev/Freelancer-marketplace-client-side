import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1>Task Details for ID: {id}</h1>
      {/* Fetch and display task details here */}
    </div>
  );
};

export default TaskDetails;
