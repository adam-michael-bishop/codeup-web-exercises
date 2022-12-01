(() => {
    "use strict";

    function printPowersOfTwo(maxPower){
        let i = 1;
        while (i <= maxPower) {
            console.log(`${2 ** i}`);
            i++;
        }
    }

    function getRandomNumberInclusiveBetween(minNumber, maxNumber){
        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }

    function sellIceCream(conesToSell){
        console.log(`I have ${conesToSell} ice cream cones to sell!`);
        do {
            let conesBought = getRandomNumberInclusiveBetween(1, 5);
            if ((conesToSell - conesBought) >= 0) {
                console.log(`Customer bought ${conesBought} ice cream cone(s)!`);
                conesToSell -= conesBought;
            } else {
                console.log(`Sorry, I only have ${conesToSell} left! Can't sell ${conesBought}.`)
            }
        } while (conesToSell > 0);
        console.log(`Yay! All done. I have ${conesToSell} cones left.`);
    }

    printPowersOfTwo(16);
    sellIceCream(getRandomNumberInclusiveBetween(50, 100))
})();

