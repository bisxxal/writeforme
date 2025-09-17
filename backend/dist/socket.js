import { Server } from 'socket.io';
let io;
const userSocketMap = {}; // { userId: socketId }
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};
export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: ['http://localhost:3000', 'http://localhost:3001', 'https://datein.vercel.app'],
            methods: ['GET', 'POST'],
            credentials: true
        },
    });
    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId;
        if (userId && userId !== 'undefined') {
            userSocketMap[userId] = socket.id;
            // console.log(`User connected: ${userId} (${socket.id})`);
        }
        else {
            // console.warn(`Invalid userId on connection: ${userId}`);
        }
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
        socket.on('join', (chatId) => {
            socket.join(chatId);
            // console.log(`User joined room: ${chatId}`);
        });
        // Example Node.js socket code
        socket.on('message_deleted', ({ chatId, messageIds }) => {
            socket.to(chatId).emit('message_deleted', { chatId, messageIds });
        });
        socket.on('disconnect', () => {
            // console.log('User disconnected:', socket.id);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        });
    });
    return io;
};
export const getIO = () => {
    if (!io)
        throw new Error('Socket.io not initialized');
    return io;
};
