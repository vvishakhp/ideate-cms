const path = require('path');

let production = false;


const config = {
    mode: production ? 'production' : 'development',
    target: 'node',
    entry: './src/main.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'ideatecms.js',
        path: path.resolve(__dirname, 'dist')
    }
};

if(!production){
    config.devtool = 'inline-source-map';
}

module.exports = config;