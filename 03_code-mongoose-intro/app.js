/**
 *  TOC
 */

const mongoose = require('mongoose')

// this is the name of the database:

const DB_NAME = "mongoose-cats-dogs"

// connect to the database, 27017 is the port (shows connecting to the local machine) - the application runs on a specific port, this is the port for mongodb by convention (27017)
// `mongodb://localhost:27017/${DB_NAME}` is the URL, there must be a url as the first argument
// {useNewUrlParser: true, useUnifiedTopology: true} these are "options", the second argument
// mongo returns a promise so we can chain a .then
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));

//mongodb works with documents, some of these documents have requirements (i.e. some fields need certain data types) - all requirements are called schema
// i.e. with a  database of objects - we have the ability to make some objects require certain keys i.e. each object has to have a name and the value needs to be a string
// schema is a simplified way to tell mongoose how documents should be. Model is the CLASS of the document
// Mongoose is the name that we give to the CLASS that produces mongodb documents

// mongoose gives us a model (takes the name) and a schema. name in this case is capuccino but is usual to give it the same name as the class

//schema is a configuration object so can be created and discarded

/* const Cat = mongoose.model('Cat', schema) */ // instead of this, we use:

const Cat = mongoose.model( 
    'Cat', // this (Cat) is the name for the collection. By default, mongodb will take the name, give it a lower-case and make it plural, this does NOT mean you should do it in JS
    {
      name: String,
      color: String,
      age: Number
    } // these are mongoose classes from the library
  )

// strings in mongoose need to enter a database so mongoose creates a class (schema) for us

// DEFINITION OF MODEL: the model is the class that we create to create a document (an entry in the database) with mongoose, to be used in a database

// to create the document we know we have to have a name, color and age as these were pre-defined above BUT we can add anything else that we like:

  Cat.create({
    name: "Miki",
    color:"multi",
    age: 0,
    meaowsLoudly: true,
    sex: "female"
})
.then(cat => console.log(cat)) // the create method is a promise as it can take time to send the document to the database, so it can be chained with .then etc.
// this is an oppotunity to res.render a new template with the new cat data OR some other meaningful action
.catch(err => console.log(err))

// essentially: the model is the MINIMUM structure that our documents will have
// we are asked to send back a string, so an empty string is permitted BUT there is a way to prevent an empty string and require an answer

// creating a dog
const Dog = mongoose.model(
    'Dog',
    {
      name: String,
      color: String,
      age: Number
    } // These are NOT JS primitives, they are mongoose classes from the library
  )

// making the creation of a dog or cat a promise - saving them as promises:
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

  //if you have one than more operation, this is in place of the .then() or the .catch()
  // this is called grouping promises, it will gather everything and console.log an array that is the join of cats and dogs:

  Promise.all([createCatPromise, createDogPromise])
  .then(catsAndDogsArray => console.log(catsAndDogsArray))
  // you can also do this with find(), you can group them together



// once a document is created, we can use mongoose sugar syntax to read from the database:

Cat.find(
    {
        name: "Miki"
    }
)
.then(cats => console.log('Cat.find() results', cats))
.catch((err) => console.log('Cat.find() returned an error: ', err))

// the above is used to search a database for a cat with name: Miki, this is asyncronous code so is a promise and can be .then()

// Mongoose gives the option to create an event listener with the .on method, and then express a callback:
mongoose.connection.on('connected', ()=> console.log('Mongoose connected (coming from the connection event listener)'))

// closing the database is also important to prevent crashes:
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// this next part is listening to the node process, when it says the process is broken (SIGINT), it will disconnect from the database - add to every collection that you make (think of event listeners):
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });