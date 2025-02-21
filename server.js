// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", // Allow all origins (for development)
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("updateTask", (task) => {
//     console.log("Task updated:", task);
//     io.emit("taskUpdated", task); // Broadcast update to all clients
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });

// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`WebSocket Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

//app.use(cors()); // Enable CORS for API routes
// Enable CORS
app.use(cors({
  origin: "http://localhost:3000", // Change this if frontend runs on a different port
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from frontend
    methods: ["GET", "POST"],credentials: true
  },
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(4000, () => {
  console.log("WebSocket Server running on http://localhost:4000");
});

