import express from 'express';
import cors from 'cors';
import http from "http";

import {router} from './routes/routes';
import connect from './database/database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const server = http.createServer(app)

const db = 'mongodb+srv://wdl:9c8x7z4a5s6d@cluster0.v9sxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
connect({db});

const port = 3333;

server.listen(port, () => {
  console.log(`Listening to port ${port}...`)
});

