import React, { useEffect, useState } from 'react';
import { useTaskStore } from '../stores/useTaskStore';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const { createTasks, loading, updatetask } = useTaskStore()

  const navigate = useNavigate()
  const location = useLocation();
  const { id, taskName, dueDate: editDueDate } = location.state || {};
  console.log(id, taskName, editDueDate);


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (id) {

    await   updatetask({ id, task, dueDate });
      navigate('/task')

    } else {

    await  createTasks({ task, dueDate });
    if(!loading) { navigate('/task')
      window.location.reload();
    }
    
    }

    if (!task || !dueDate) {
      alert('Please enter a task and select a date!');


      return;
    }
    setTask('');
    setDueDate('');
  };

  useEffect(() => {
    if (id) {
      setTask(taskName || '');
      setDueDate(editDueDate ? editDueDate.slice(0, 10) : '');
    }
  }, [id, taskName, editDueDate]);


  return (
    <div
      className="flex items-center justify-center w-screen h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/Gemini_Generated_Image_sciobasciobascio.png')",
      }}
    >
      <div className="w-[600px] flex flex-col min-h-[350px] bg-white bg-opacity-70 shadow-lg rounded-lg p-8">
        <h1 className="text-[40px] text-center font-bold mb-2">Add New Task</h1>
        <h6 className="text-[18px] text-gray-500 text-center mb-6">
          Plan your next TaskFlow milestone
        </h6>

        {/* Task Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6 w-full"
        >
          {/* Task Name */}
          <div className="w-[70%] relative">
            <input
              type="text"
              className="w-full shadow-md rounded-sm h-9 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder=" "
            />
            {task ? "" : <span className="absolute left-3 top-1 text-[13px] text-gray-400">
              Task Name
            </span>}
          </div>

          {/* Due Date */}
          <div className="w-[70%] relative">
            <input
              type="date"
              className="w-full shadow-md rounded-sm h-9 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            {task ? "" : <span className="absolute left-3 top-1 text-[13px]  text-gray-400">
              Due Date
            </span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-full mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-2 rounded-md 
                         transition-all duration-200 shadow-md"
            >
           {id ? <>Update Task</>:<>Add Task</> }   
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
