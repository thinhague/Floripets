// const express = require('express')
// const routes = require('./routes')
import express from 'express'
import path from 'path';
import cors from 'cors'
import routes from './routes'
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
  });

app.use(express.json());
app.use(routes)
app.use('/files',express.static(path.resolve(__dirname,'tmp')))

app.listen(3000,()=>{console.log('Servidor rodando na porta 3000')});

