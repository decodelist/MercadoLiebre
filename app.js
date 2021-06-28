const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const { send } = require('process');

app.use(express.static('public'));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/ofertas', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')));
app.get('/tiendasof', (req,res) => res.sendFile(path.join(__dirname, 'views', 'tiendasof.html')));
app.get('/vender', (req,res) => res.sendFile(path.join(__dirname, 'views', 'vender.html')));
app.get('/ayuda', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ayuda.html')));
app.get('/creatucuenta', (req,res) => res.sendFile(path.join(__dirname, 'views', 'creatucuenta.html')));
app.get('/ingresa', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ingresa.html')));
app.get('/miscompras', (req,res) => res.sendFile(path.join(__dirname, 'views', 'miscompras.html')));

app.listen(port,() => console.log(`Server running in http://localhost:${port}`) ) 