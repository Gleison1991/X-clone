import express from 'express';
import { getMe,signup, logout, login } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;
