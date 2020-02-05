const express = require('express');
const cors = require('cors');

const server = express();

// MIDDLEWARES:
server.use(cors());
server.use(express.json());

server.get('/todos', (req, res) => {
    res.json({message: 'Hello World'});
})

server.listen(process.env.PORT || 3000);