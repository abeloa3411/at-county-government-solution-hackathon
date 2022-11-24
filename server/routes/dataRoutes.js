import express from "express";
import { createPost, getData } from "../controllers/dataControllers.js";

const router = express.Router();

router.route("/").get(getData).post(createPost)

export default router;
