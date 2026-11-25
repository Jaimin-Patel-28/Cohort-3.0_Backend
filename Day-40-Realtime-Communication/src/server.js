import app from "./app/app.js";
import { createServer } from "node:http";
import socketServer from "./sockets/socket.server.js";

const httpServer = createServer(app);
socketServer(httpServer);

httpServer.listen(3000, () => {
  console.log("Server running at 3000");
});
