import { Server } from "./presentation/server";
import { envs } from './config/envs'
import { AppRoutes } from "./presentation/routes";


async function main() {
    const server = new Server()
    await server.start({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });
}

(async () => await main())();




