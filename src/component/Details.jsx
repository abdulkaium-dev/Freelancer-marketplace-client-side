import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
     const datas = useLoaderData();
      const { id } = useParams();
      console.log (id)
    return (
    <div>
      <h1>Task Details</h1>
      <p><strong>Title:</strong> {datas.title}</p>
      <p><strong>Description:</strong>sams</p>
      {/* Render more fields as needed */}
    </div>
    );
};

export default Details;