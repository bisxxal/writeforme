//@ts-nocheck
import express from "express";
import { setLiked } from "../controller/likedContoller.js";
const like = express.Router();
like.get("/setlike", setLiked);
export default like;
