const student =  { 
    name: 'Miki',
    bootcamp: 'Barcelona',
    message: 'First hbs',
    address: `Carrer d'Espolsa-Sacs`,
    // address: '',   // won't be rendered
    // address: 0,    // won't be rendered
    // address: [],   // won't be rendered
    // address: null,   // won't be rendered
    // address: undefined,    // won't be rendered
    // address: false    // won't be rendered
    cities: ['London', 'Bristol', 'Barcelona', 'Paris', 'Bordeaux', 'Meribel'],
    flights: ['564GHT', '248PLX'],
    info: { 
      name: 'Miki',
      campus: 'BCN',
      year: 2020,
      test: undefined,
      descr: {
        content: 'Some content string'
      }
    }
  }
  
  module.exports = student