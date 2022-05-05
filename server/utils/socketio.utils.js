const socketio = (io) => {
  io.on("connection", (socket) => {
    socket.on("user__join", ({ username }, callback) => {
      console.log(username, "connected");
    });

    socket.on("disconnect", (socket) => {
      console.log("user disconnected");
    });
  });
};

module.exports = socketio;
