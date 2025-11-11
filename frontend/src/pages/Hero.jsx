import React, { useEffect, useState } from 'react'
import { Pencil, Trash2 } from "lucide-react";
import { useTaskStore } from '../stores/useTaskStore';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
const{getTask,task,loading,deletetask,isCompleted} = useTaskStore();
  const navigate = useNavigate();
  const [tasks,setTasks] = useState([]);
 useEffect(() => {
    getTask();
  }, [getTask]);

  useEffect(() => {
    if (task && Array.isArray(task)) {
      setTasks(task);
    }
  }, [task]);

console.log("tasks",task)

 
  const updateHandler = (id, taskName, dueDate) => {
    navigate('/addTask', {
      state: { id, taskName, dueDate }
    });
  };


  const deleteHandler = (id) =>{
deletetask({id})
  }
 const completeHandler = (id) =>{
isCompleted({id})
  }

 
  return (
    <div className='w-screen min-h-screen  flex  md:items-start md:p-7 items-start justify-center bg-gray-100 '>

    { task.length === 0 ? ( <div className="flex flex-col items-center text-gray-500 mt-10">
        
        <p className="mt-4 text-lg font-medium">No tasks yet!</p>
        <p className="text-sm text-gray-400">Add your first task to get started 🚀</p>
      </div>):
      <div className="grid grid-cols-1 p-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {
          tasks.map((t, i) => {
                 const daysLeft = Math.ceil(
            (new Date(t.dueDate) - new Date()) / (1000 * 60 * 60 * 24)
          );
            return(

            
            <div key={i} className=' flex flex-col shadow-md justify-between md:min-h-[200px]  md:p-8 p-6 min-h-[150px] bg-white rounded-lg space-y-2  '>
              <button className={t.completed ? 'bg-green-400 text-[11px] font-medium text-white rounded-full w-16 px-1' : 'bg-red-600 text-[11px] text-white rounded-full w-16 px-2 '}>{t.completed ? 'Completed' : "Pending"} </button>

{/* TASK */}
              <h1 className={`font-medium text-sm text-ellipsis w-full  `} > {t.task}</h1>
                {/* Due */}
                <div className="flex justify-between items-center text-[11px] sm:text-xs text-gray-500">
                <span>
                  {new Date(t.dueDate).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span
                  className={`${
                    daysLeft < 0
                      ? "text-red-600"
                      : daysLeft === 0
                      ? "text-yellow-600"
                      : "text-green-600"
                  } font-medium`}
                >
                  {daysLeft > 0
                    ? `${daysLeft}d left`
                    : daysLeft === 0
                    ? "Today"
                    : "Overdue"}
                </span>
              </div>

              {/* Icons */}
              <div className='flex items-center justify-between  ' >
                <div> <input className='accent-green-600 ' type="checkbox" checked={t.completed} onClick={()=>{completeHandler(t._id)}} /></div>
                <div className='flex   space-x-2 '>
                  <Pencil size={14} className="text-blue-600 hover:text-blue-800" onClick={() => {updateHandler(t._id,t.task,t.dueDate)}} />
                  <Trash2 size={14} className="text-blue-600 hover:text-blue-800" onClick={() => {deleteHandler(t._id)}} />
                </div>
              </div>

            </div>

          )})

        }

      </div>
}
    </div>
  )
}

export default Hero
