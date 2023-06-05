require('./config/dotenv');
require("express-async-errors");

const express = require ('express');
const {initDatabase } = require('./config/db');
const cors = require('cors'); 

const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');
const { stack } = require('./routes/experienciasRoute');
const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) =>  { 
    res.send(' Seja bem-vindo à API do Meu Site Pessoal!');
});

app.use(cors());
app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo está errado!');
});

app.listen(port, () =>{ 
    console.log(`Servidor rodando na porta ${port}`);
    
});

// require('dotenv').config();

// const { log } = require('console');
// const express = require('express');

// const app = express();

// const port = process.env.PORT || 5000;

// app.get('/', (req, res) =>{
//     res.send('Seja bem vindo ao meu site!')
// });

// app.listen(port, () => {
//     console.log(`Servidor nodando na porta ${port}`);
// });