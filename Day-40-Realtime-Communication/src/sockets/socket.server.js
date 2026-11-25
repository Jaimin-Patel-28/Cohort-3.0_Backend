import { Server } from "socket.io";

export default function socketServer(httpsServer) {
  const io = new Server(httpsServer);

  io.on("connection", (socket) => {
    console.log(`A user connected with socket ID: ${socket.id}`);

    socket.on("disconnect",()=>{
        console.log(`A user disconnect from Socket.io`)
    })
  });
}
