import { Application } from "./application/Application";
import { AppConfig } from "./models/appConfig";

let conf = new AppConfig();
conf.dbFile = "test";

let app = new Application(conf);