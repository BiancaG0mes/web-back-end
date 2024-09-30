import express from 'express';
import {routes} from './routes';

const app = express(); //cria o servidor e passa o construtor

app.use(express.json()); //json: JS Object Notation

app.use(routes); //cria-se rotas/ endpoints 
//para acessar todo recurso, usa-se url: rota 

app.listen(3333, () => console.log('Servidor está executado: on-line na porta 333'))