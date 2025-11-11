import express from 'express';
import { getProfile, login, logout, signup } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middlewares/auth.middleware.js';

const router = express.Router()


router.post('/signup',signup);

router.post('/login',login);

router.post('/logout',logout);
router.get('/profile',protectedRoute,getProfile) 
// router.post('refresh-token',refreshToken)







export default router;
