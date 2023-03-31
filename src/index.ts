import ServerBootstrap from "./bootstrap/server.bootstrap";

const server = new ServerBootstrap();

// alternativa 1 de ejecución
/*const start = async () => {
    try {
        await server.initialize();
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

start();*/

// alternativa 2 de ejecución
(async () => {
  try {
    await server.initialize();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
