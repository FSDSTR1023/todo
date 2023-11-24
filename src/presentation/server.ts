import cors from "cors";
import express, { Router } from "express";


interface StartOptions {
    port: number | string;
    routes: Router;
}

export class Server {

    private readonly app = express();

    private setupMiddlewares() {
        this.app.use(express.json());
    }

    public async start(options: StartOptions) {
        // Middlewares
        this.setupMiddlewares();

        // Routes
        this.app.use(options.routes);
        this.app.use(cors())

        // Server listening
        this.app.listen(options.port, () => console.log(`(ctrl + click) 👉 http://localhost:${options.port}`));
    }
}