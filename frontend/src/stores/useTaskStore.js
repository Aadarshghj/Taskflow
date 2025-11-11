import toast from "react-hot-toast";
import { create } from "zustand";

import axios from '../lib/axios'




export const useTaskStore = create((set, get) => ({

    task: [],
    loading: false,


    createTasks: async ({ task, dueDate }) => {
        console.log("adding task");
        set({ loading: true })
        try {
            console.log(" try adding task");
            const res = axios.post('/task/create', { task, dueDate });
            set((prevState) => ({
                task: [...task, res.data]

            }))
            set({ loading: false })
            toast.success("Product created successfully!");



        } catch (error) {
            toast.error(error.response.data.error);
            set({ loading: false });

        }

    },

    getTask: async () => {
        set({ loading: true });

        try {
            const res = await axios.get('/task/');

            set({ task: res.data, loading: false });
            toast.success("Fetched successfully!");
        } catch (error) {
            toast.error(error.response?.data?.error || "Failed to fetch tasks");
            set({ loading: false });
        }
    }
    ,

    updatetask: async ({ id, task, dueDate }) => {

        set({ loading: true });
        try {

            const res = await axios.put(`/task/${id}`, { task, dueDate });
            set((prevState) => ({
                task: [...task, res.data]

            }))
            set({ loading: false })
            toast.success("Product update successfully")

        } catch (error) {
            toast.error(error.response?.data?.error || "Failed to update tasks");
            set({ loading: false });
        }

    },

deletetask : async ({id}) => {
           set({ loading: true });
           try {
            await axios.delete(`/task/${id}`);
                set((prev) => ({
      task: prev.task.filter((t) => t._id !== id),
      loading: false,
    }));
                set({ loading: false })
                toast.success("deleted successfully!");
           } catch (error) {
                  toast.error(error.response?.data?.error || "Failed to delete tasks");
            set({ loading: false });
           }
    
}
,

isCompleted: async ({id}) => {
     set({ loading: true });

     try {
        const res = await axios.patch(`/task/toggle/${id}`);
        set((prev)=>({
            task:prev.task.map((t) => t._id === id ? { ...t, completed: !t.completed } : t),
      loading: false,
        }))
              toast.success("updated");
     } catch (error) {
            toast.error(error.response?.data?.error || "Failed to complete operation");
            set({ loading: false });
     }
    
}



}))


