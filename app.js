const http = require('http');
//Inicializar variables de entorno
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// HANDLEBARS
// Le decimos a express que utilice handlebars
app.set('view engine', 'hbs');

//Utilizamos parciales (hbs)
hbs.registerPartials(__dirname + '/views/partials');

//Le decimos a express que considere la carpeta public(SERVIR CONTENIDO ESTATICO)
app.use( express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    titulo:'Nombre Sitio Web',
    nombre: 'Bienvenido a Sitio Web ',
    slogan:'Contigo siempre'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    titulo:'Nombre Sitio Web',
    nombre: 'Bienvenido a Sitio Web ',
    slogan:'Contigo siempre'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    titulo:'Nombre Sitio Web',
    nombre: 'Bienvenido a Sitio Web ',
    slogan:'Contigo siempre'
  })
})

//Enrutamiento sin renderizar
// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })
//Si no encuentra una ruta predeterminada
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html')
  })

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
})
