import express = require('express');
import { AddressInfo } from 'net';
import { Router } from 'express';

let app = express();

app.use('/admin', express.static('admin'));

let server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server started listening on : " + (server.address() as AddressInfo).port);
});