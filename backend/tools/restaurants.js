 
const restaurantsList = [
    {
        name: 'Chello',
        open: true,
        area: 'Centar',
        rating: 4.0,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'},
            {name: 'Pizza margherita', price: '32,00', description: 'Sir, Umak od rajčice, Masline, Bosiljak'},
            {name: 'Pizza capricciosa', price: '39,00', description: 'Sir, Šunka, Umak od rajčice, Gljive, Masline, Bosiljak'},
            {name: 'Hamburger', price: '25,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica'},
            {name: 'Cheeseburger', price: '28,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica, sir'},
            {name: 'Pileći file na žaru', price: '32,00', description: 'Pileći file, pecivo'},
            {name: 'Svinjski odrezak na žaru', price: '30,00', description: 'Svinjski odrezak, pecivo'}
        ]
    },
    {
        name: 'Mrak Grill',
        open: true,
        area: 'Trešnjevka',
        rating: 4.1,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'}
        ]
    },
    {
        name: 'Madera',
        open: false,
        area: 'Trnje',
        rating: 3.5,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'},
            {name: 'Hamburger', price: '25,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica'},
            {name: 'Cheeseburger', price: '28,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica, sir'},
        ]
    },
    {
        name: 'Bistro To-Mi',
        open: true,
        area: 'Trešnjevka',
        rating: 4.5,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'},
            {name: 'Svinjski odrezak na žaru', price: '30,00', description: 'Svinjski odrezak, pecivo'},
            {name: 'Pečeno carsko meso i restani krumpir', price: '30,00', description: 'Svinjsko meso, restani krumpir'},
            {name: 'Hamburger', price: '25,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica'},
            {name: 'Cheeseburger', price: '28,00', description: 'Mljevena junetina, salata, hambi umak, krastavci, rajčica, sir'},
        ]
    }, 
    {
        name: 'Bistro Šalša',
        open: true,
        area: 'Trešnjevka',
        rating: 3.5,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'}
        ]
    }, 
    {
        name: 'Burgeri i To',
        open: true,
        area: 'Centar',
        rating: 3.7,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'}
        ]
    }, 
    {
        name: 'Torte i To',
        open: false,
        area: 'Centar',
        rating: 3.7,
        foods: [
            {name: 'Bečki odrezak', price: '25,50', description: 'Pohani svinjski odrezak'}
        ]
    }
    /* { name: 'Chello', meals: ['Pizza Hellas', 'Pizza Chello'] } */
];

module.exports = {restaurantsList};