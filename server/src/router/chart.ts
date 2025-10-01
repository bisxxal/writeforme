import express, { Router } from "express";
import { getMessages, sendMessage } from "../controller/chatController.js";

const chat: Router = express.Router()

chat.get("/getmessages", getMessages)
chat.post("/sendmessage", sendMessage)

export default chat 