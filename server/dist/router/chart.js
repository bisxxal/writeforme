import express from "express";
import { getMessages, sendMessage } from "../controller/chatController.js";
const chat = express.Router();
chat.get("/getmessages", getMessages);
chat.post("/sendmessage", sendMessage);
export default chat;
