const express = require('express');
const client_route = express.Router();
const clientSchema = require('../models/clientModel');

/* Ruta para crear un client */
client_route.post('/client', (req, res) => {
    const client = clientSchema(req.body);
    client
        .save()
        .then((data) => res.json({ message: data }))
        .catch((error) => res.json({ message: error }));
});

/* Listar clientes */
client_route.get('/', (req, res) => {
    clientSchema
        .find()
        .then((data) => res.json({ message: data }))
        .catch((error) => res.json({ message: error }));
});

/**Obtener un cliente en  especifico */
client_route.get('/:clientId', (req, res) => {
    const { clientId } = req.params;
    clientSchema
        .findById(clientId)
        .then((data) => res.json({ message: data }))
        .catch((error) => res.json({ message: error }));
});

/*Actualizar los parametros, colocando un id */
client_route.put('/:clientId', (req, res) => {
    const { clientId } = req.params;
    console.log(req.body)
    const clientObject = {
        client_name,
        address: [{
            city,
            code_zip,
            geo: [{
                lat,
                long
            }]
        }],
        contact: {
            email,
            cellphone
        }

    } = req.body;

    clientSchema
        .updateOne({ _id: clientId }, { $set: clientObject })
        .then((data) => res.json({ message: data }))
        .catch((error) => res.json({ message: error }));
});

/**Eliminar un cliente */
client_route.delete('/:clientId', (req, res) => {
    const { clientId } = req.params;

    clientSchema
        .deleteOne({ _id: clientId })
        .then((data) => res.json({ message: data }))
        .catch((error) => res.json({ message: error }));
});

module.exports = client_route;