const express = require('express');
const clientRoute = require('../routes/client.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/clients', clientRoute);
}

module.exports = routerApi;