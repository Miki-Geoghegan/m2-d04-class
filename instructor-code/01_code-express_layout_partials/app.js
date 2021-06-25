/**
 * TOC Express dynamic views
 * 
 * 1. require hbs
 * 2. Set the View Engine
 * 3. app.all() with the res.render() method
 * 4. set the views directory to tell express where templated are
 * 5. require the data for the page
 * 6. Pass data to the res.render() method
 * 7. Register the partials directory
 */

const express = require('express');
const path = require('path');
// * 1. require hbs
const hbs = require('hbs')

//  * 7. Register the partials directory
//__dirname === /users/Altesis/01_code-express_layout_partials

hbs.registerPartials(path.join(__dirname, '/views/partials'))

// * 5. require the data for the page
const student = require('./data/data.js')

// marco
const marco = require('./data/marco.js')

// Lau
const lau = require('./data/lau.js')

// Morgane
const morgane = require("./data/morgane.js")

// Sebas
const sebas = require("./data/sebas.js")

// Raul
const raul = require('./data/raul.js')

// Miki
const miki = require('./data/miki.js')

// Daniel
const dani = require("./data/danny.js")

// Fran
const fran = require("./data/fran.js")

const app = express();


// * 2. Set the View Engine
app.set('view engine', 'hbs')

// * 4. set the views directory to tell express where templated are
app.set(path.join(__dirname, '/views'))

app.use( express.static("public") );

app.all('/', (request, response)=> {
  // res.sendFile(path.join(__dirname, "./index.html"));
  // * 3. app.all() with the res.render() method
  response.render('index', { pageTitle: "Home Page", cohortName: "Pizza Bytes" })
})

app.all('/about', (request, response)=> {
  // response.send('<h1> Hello from Ironhack </h1>')
  // response.sendFile(path.join(__dirname, "./about.html"));
  // * 3. app.all() with the res.render() method
  response.render('about', student)
})

// Marco
app.all('/marco', (req, res) => res.render('marco', marco))


// Lau
app.all('/lau', (req, res) => res.render('lau', lau))


// Morgane
app.all("/morgane", (req, res) => res.render("morgane", morgane))


// Sebas
app.all("/sebas", (request, response)=> response.render("sebas", sebas))

// Raul
app.all('/raul', (request, response) => response.render('raul', raul))


// Daniel
app.all("/danny", (req, res) => res.render("danny", dani))


// Fran
app.all('/fran', (req, res) => res.render("fran", fran))


//Miki
app.all('/miki', (req, res) => res.render('miki', miki))


app.listen(3000)

// add space for raul
