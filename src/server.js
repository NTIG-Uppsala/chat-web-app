const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");

const httpServer = http.createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("send_message", (message) => {
        console.log("Sent message:", message);
        io.emit("receive_msg", message);
    })
});

const PORT = 3001;
httpServer.listen(PORT, () => {
    console.log(`Socket.io server is running on ${PORT}`)
});