const EventEmitter = require('node:events');
const PizzaShop = require('./extendEventEmitter')
const emitter = new EventEmitter();

const pizzaShop = new PizzaShop();

// emitter.on("test", (a,b) => {
//     console.log(`${a} has initiated at this point`);
// })

// emitter.on("test", (a,b) => {
//     if(b === "random"){
//         console.log(`Yes we can use the second :on over the same emit`)
//     }
// })

// emitter.emit("test", "server", "random")
// emitter.emit('test', "server2")

pizzaShop.on("order", (size, toppings) => {
    console.log(`order recieved of ${size} pizza with ${toppings} toppings`)
})

pizzaShop.order("large", "mushrooms")
pizzaShop.displayOrderNumber()