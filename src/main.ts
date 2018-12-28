import { Application } from './application/Application';
import { AppConfig } from './models/appConfig';

let config = new AppConfig();
config.runInitialSetup = true;

new Application(config).run();