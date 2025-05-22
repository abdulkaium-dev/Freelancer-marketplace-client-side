import React from 'react';

const AddTask = () => {
  return (
    <div className='text-center '>
 <form  className='bg-gray-100 border-2 mx-96'>
  <div>
      <label  for="taskTitle">Task Title:</label><br />
  <input    className="p-2 border rounded" type="text" id="taskTitle" name="taskTitle" required /><br /><br />
  </div>

  <div>
     <label for="category">Category:</label><br />
  <select    className="p-2 border rounded" id="category" name="category" required>
    <option value="">--Select Category--</option>
    <option value="web-development">Web Development</option>
    <option value="design">Design</option>
    <option value="writing">Writing</option>
    <option value="marketing">Marketing</option>

  </select>
  </div>

 <br />

 <div>
      <label for="description">Description:</label><br />
  <textarea    className="p-2 border rounded" id="description" name="description" rows="4" cols="50" required></textarea></div> <br />

  <div>
    <label for="deadline">Deadline:</label><br />
  <input    className="p-2 border rounded" type="date" id="deadline" name="deadline" required /></div>  <br />

 <div>
     <label for="budget">Budget:</label><br />
  <input    className="p-2 border rounded" type="number" id="budget" name="budget" min="0" required /></div><br />

  <div ><label for="userEmail">User Email:</label><br />
  <input    className="p-2 border rounded" type="email" id="userEmail" name="userEmail" readonly value="user@example.com" /></div><br />

  <div>
    <label for="userName">User Name:</label><br />
  <input    className="p-2 border rounded" type="text" id="userName" name="userName" readonly value="John Doe" /></div><br />

  <button    className="my-3 bg-green-500 text-white border border-gray-300 p-2 rounded-lg " type="submit">Add Task</button>
</form>


    </div>
  );
};

export default AddTask;


