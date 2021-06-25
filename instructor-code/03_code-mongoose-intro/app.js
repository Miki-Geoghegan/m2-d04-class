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
