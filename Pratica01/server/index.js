const express = require('express');
const estadosRouter = require('./routes/estados-router');
const cidadesRouter = require('./routes/cidades-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Demais rotas
app.use('/estados', estadosRouter);
app.use('/cidades', cidadesRouter)

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});