"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let userFavColor = prompt('What is your favorite color?');

alert(`Neat, ${userFavColor.toLowerCase()} is my favorite color too!`);

let littleMermaidDays = Number(prompt('How many days did you rent "The Little Mermaid" for?'));
let brotherBearDays = Number(prompt('How many days did you rent "Brother Bear" for?'));
let herculesDays = Number(prompt('How many days did you rent "Hercules" for?'));
let pricePerDay = Number(prompt('What was the price per day for rental?'));
let totalPrice = (littleMermaidDays + brotherBearDays + herculesDays) * pricePerDay;

alert(`Your total price is ${totalPrice}`);




