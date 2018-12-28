import { AppConfig } from '../models/appConfig';
import { join } from 'path';
import { readFile, writeFile, exists, existsSync } from 'fs';
import { rejects } from 'assert';

export class ConfigUtil {
    private fileName: string;

    public constructor(public filePath: string = process.cwd()) {
        this.fileName = join(filePath, 'ideate.config.json');
    }


    //Reads the internal config file
    async readConfig(): Promise<AppConfig> {
        if (existsSync(this.fileName)) {
            return new Promise<AppConfig>((resolve, reject) => {
                readFile(this.fileName, (err, data) => {
                    if (err) reject();
                    else resolve(JSON.parse(data.toString()));
                });
            });
        } else return Promise.resolve(new AppConfig());
    }

    //Save the config to a file
    async saveConfig(config: AppConfig) {
        return new Promise((resolve, reject) => {
            writeFile(this.fileName, JSON.stringify(config, null, 2), (err) => {
                if (err) reject();
                else resolve();
            });
        });
    }
}