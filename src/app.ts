import { Server } from "./presentation/server";
import router from "./presentation/tasks/routes";

const port = process.env.PORT || 3001;

async function main() {
    const server = new Server()
    await server.start({
        port: port,
        routes: router,
    })

    console.log(`(ctrl + click) 👉 http://localhost:${port}`);

}

(async () => await main())();




