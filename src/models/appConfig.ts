export class AppConfig {
    public constructor(
        //Port of the application to serve on
        public port: number = 8080,

        //Folder to store the Apps Data
        public dataFolder: string = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'] + '/ideatecms',

        // Whether to run initial setup of the app. Useful if you want to completly configure the app
        public runInitialSetup = false,

        // Choose wether to serve the Admin page so that you can customize the app later
        public serveAdminPage = true,

        public adminPagePath = "/admin",
    ) { }
}