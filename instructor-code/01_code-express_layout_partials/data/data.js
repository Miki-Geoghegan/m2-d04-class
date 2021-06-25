const student =  { 
  name: 'Sofia',
  bootcamp: 'Barcelona',
  message: 'You Rock',
  address: 'Carrer Pamplona',
  // address: '',   // won't be rendered
  // address: 0,    // won't be rendered
  // address: [],   // won't be rendered
  // address: null,   // won't be rendered
  // address: undefined,    // won't be rendered
  // address: false    // won't be rendered
  cities: ['Napoli', 'Barcelona', 'Paris', 'Berlin'],
  flights: ['123ABC', '345TYU'],
  info: { 
    name: 'Ironhacker',
    campus: 'BCN',
    year: 2020,
    test: undefined,
    descr: {
      content: 'Some content string'
    }
  }
}

module.exports = student