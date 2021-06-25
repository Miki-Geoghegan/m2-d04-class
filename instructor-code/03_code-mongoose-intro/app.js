/**
 * TOC
 * 0. Check package.json to see if there are any dependencies to install and run npm install
 * 1. require mongoose
 */


const mongoose = require('mongoose')

const DB_NAME = "mongoose-intro"

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`,
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}" coming from the .then() of the conneciton promise`))
.catch(err => console.error('Error connecting to mongo', err));


const Cat = mongoose.model(
  'Cat',
  {
    name: String,
    color: String,
    age: Number
  } // These are NOT JS primitives, they are mongoose classes from the library
)

const Dog = mongoose.model(
  'Dog',
  {
    name: String,
    color: String,
    age: Number
  } // These are NOT JS primitives, they are mongoose classes from the library
)

const createCatPromise = Cat.create(
  {
    name: "Marco",
    color: "carrot",
    age: 3,
    meowsLoudly: true,
    sex: "M"
  }
)

const createDogPromise =  Dog.create(
  {
    name: "Fuffy",
    color: "white",
    age: 2,
    barksLoudly: false,
    sex: "M"
  }
)


Promise.all([createCatPromise, createDogPromise])
.then(catsAndDogsArray => console.log("These are the cats and dogs I created", catsAndDogsArray) )

const catFindPromise = Cat.find(
  {
    name: "Marco"
  }
)

const dogFindPromise = Dog.find(
  {
    name: "Fuffy"
  }
)


Promise.all([catFindPromise, dogFindPromise])
.then(catsAndDogsArray => console.log("This is all the cats and dogs I have found", catsAndDogsArray))

/*
Cat.create(
  {
    name: "Marco",
    color: "carrot",
    age: 3,
    meowsLoudly: true,
    sex: "M"
  }
)
.then(cat=> console.log(cat))  // In this callback you will do some thing meningful for your app, i.e. if you are in Express you will res.render() a new temlate that contains the new cat data
.catch(err=> console.log(err))

Cat.find(
  {
    name: "Marco"
  }
)
.then(cats=> console.log('Cat.find() results: ', cats))
.catch( (err) => console.log('Cat.find() returned an error: ', err));

*/

mongoose.connection.on('connected', ()=> console.log('Mongoose connected (coming from the connection event listener)'))

mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});