import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";

import {getTasks ,updateTask , deleteTask ,toggleComplete, createTask } from '../controllers/task.controller.js'
 


const router = express.Router();




router.get('/',protectedRoute,getTasks);
router.put("/:id",protectedRoute,updateTask);
router.delete("/:id",protectedRoute,deleteTask);
router.patch('/toggle/:id',protectedRoute,toggleComplete);
router.post('/create',protectedRoute,createTask );



export default router;