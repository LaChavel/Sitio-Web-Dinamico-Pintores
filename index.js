//Importamos el paquete de Express
const express = require('express');
const hbs = require('hbs');

//Creamos la aplicación 
const app = express();

//Definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamos a generar los Partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//Configurar rutas
app.get('/', (req, res)=>{
    res.render('index');
});

//Miguel Ángel
app.get('/miguel-angel', (req, res)=>{
    res.render('miguel');
});

//Claude Monet
app.get('/claude-monet', (req, res)=>{
    res.render('monet');
});

//Pablo Picasso
app.get('/pablo-picasso', (req, res)=>{
    res.render('picasso');
});

//Diego Velazquez
app.get('/diego-velazquez', (req, res)=>{
    res.render('velazquez');
});

//Arrancar servidor web
app.listen(8080, ()=>{
    console.log('Escuchando al puerto 8080');
});