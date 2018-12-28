import { AppConfig } from "../models/appConfig";
import express = require('express');
import { Express } from 'express-serve-static-core';
import { AddressInfo, Server } from "net";
import { ConfigUtil } from '../utils/config';
import { TemplateUtil } from '../utils/template';


export class Application {

    private app: Express = express();
    private server: Server;

    private configUtil = new ConfigUtil();
    private templateUtil = new TemplateUtil();

    public constructor(private config: AppConfig = null) { }

    public async run() {
        // Makesure the app has a configuration
        if (!this.config) {
            this.config = await this.configUtil.readConfig();
        } else {
            this.configUtil.saveConfig(this.config);
        }

        // Bind Setup route if needed
        if (this.config.runInitialSetup) {
            this.addInitialSetup();
        } else {
            this.configureApplicationRoutes();
        }
        this.startServer();
    }

    private addInitialSetup() {
        this.app.use('/', (req, res) => {
            res.send('Setup page');
        });
    }

    private configureApplicationRoutes() {

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