const student =  { 
    name: 'Morgane',
    bootcamp: 'Barcelona',
    message: 'Breizh atao',
    address: 'Carrer de Casp',
    // address: '',   // won't be rendered
    // address: 0,    // won't be rendered
    // address: [],   // won't be rendered
    // address: null,   // won't be rendered
    // address: undefined,    // won't be rendered
    // address: false    // won't be rendered
    cities: ['Brest', 'Barcelona', 'Paris', 'Rennes'],
    flights: ['123ABC', '345TYU'],
    info: { 
      name: 'Ironhacker',
      campus: 'BCN',
      year: 2020,
      test: undefined,
      descr: {
        content: "This is Morgane's description"
      }
    }
  }
  
  module.exports = student