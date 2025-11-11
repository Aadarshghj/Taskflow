import Task from "../models/task.model.js";



export const createTask = async (req, res) => {
  try {
    const { task, dueDate } = req.body;
    const userId = req.user._id; // assuming user middleware sets req.user

    const newTask = await Task.create({ userId, task, dueDate });
    res.status(201).json(newTask);
  } catch (error) {
    console.log("Error in creating task:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getTasks = async (req, res) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    console.log("Error in fetching tasks:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const updateTask = async (req, res) => {
  try {
    const { task, dueDate } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { task, dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log("Error in updating task:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error in deleting task:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



export const toggleComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;
    await task.save();

    res.json({ message: "Task completion status updated", task });
  } catch (error) {
    console.log("Error in complete route:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};