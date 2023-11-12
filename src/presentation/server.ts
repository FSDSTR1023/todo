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

        // Server listening
        this.app.listen(options.port, () => console.log(`Server listening on port: ${options.port}`))
    }
}