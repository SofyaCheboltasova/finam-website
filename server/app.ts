import ServerClass from "./src/server";

function app() {
  const server = new ServerClass();
  server.start();
}

app();
