import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import BrokerBootstrap from "./bootstrap/broker.bootstrap";

const server = new ServerBootstrap();
const database = new DatabaseBootstrap();
const broker = new BrokerBootstrap();

(async () => {
  try {
    await server.initialize();
    await database.initialize();
    await broker.initialize();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
