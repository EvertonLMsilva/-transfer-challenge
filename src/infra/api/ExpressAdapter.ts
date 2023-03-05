import IHttpServer from "./interfaces/IHttpServer";
import Express, { Request, Response } from 'express';

export default class ExpressAdapter implements IHttpServer {
    app: any
    constructor() {
        this.app = Express();
        this.app.use(Express.json());
    }
    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async (request: Request, response: Response ) => {
            const output = await callback(request.params, request.body);
            response.json(output);
        })
    }

    listen(port: number): void {
        this.app.listen(port);
    }
}