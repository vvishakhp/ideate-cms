import { AppConfig } from "../models/appConfig";
import express = require('express');
import { Express } from 'express-serve-static-core';
import { AddressInfo, Server } from "net";

export class Application {
    private app: Express = express();
    private server: Server;

    public constructor(private config: AppConfig) {
        this.init();
    }


    private init() {
        if (this.config.dbFile && this.config.dbFile.length > 0) {
            this.addRoutes();
        } else {
            this.addSetupRoute()
        }
        this.startServer();
    }

    private addSetupRoute() {
        this.app.use('/', (req, res)=>{
            res.send('Setup page');
        });
    }

    private addRoutes() {
        this.app.use('/', (req, res)=>{
            res.send('Home page');
        });
    }

    startServer() {
        this.server = this.app.listen(this.config.port, () => {
            console.log(`Server started on port : ${(this.server.address() as AddressInfo).port}`);
        });
    }

    public dispose() {
        this.server.removeAllListeners();
        this.server.close();
    }
}