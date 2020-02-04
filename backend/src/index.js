const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Iagohcc:devihcc14789@clusterihcc-daflk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//Use vai ser valido para todas as rotas da aplicação
//cadastrando no express p/ entender informações no formato json
app.use(express.json());
app.use(routes);

/*Porta do Servidor*/
app.listen(3333);