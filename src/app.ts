import { Server } from "./presentation/server";
import { envs } from './config/envs'
import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./db/mongo/init";

(async () => await main())();

async function main() {
    const server = new Server()

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

    await server.start({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });
}