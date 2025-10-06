
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chat from './router/chart.js';
import { createServer } from 'http';
import { initSocket } from './socket.js';

const app = express();
dotenv.config();

const httpServer = createServer(app);

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://datein.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use("/api/chart", chat);

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 8000;

initSocket(httpServer);

httpServer.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
