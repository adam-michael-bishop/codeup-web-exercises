(() => {
    "use strict";
    const maxConeAmount = 100;
    const minConeAmount = 50;
    const minSoldCones = 1;
    const maxSoldCones = 5;

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
            let conesBought = getRandomNumberInclusiveBetween(minSoldCones, maxSoldCones);
            if ((conesToSell - conesBought) >= 0) {
                conesToSell -= conesBought;
                console.log(`Customer bought ${conesBought} ice cream cone(s)! I have ${conesToSell} left.`);
            } else {
                console.log(`Sorry, I only have ${conesToSell} left! Can't sell ${conesBought}.`)
            }
        } while (conesToSell > 0);
        console.log(`Yay! All done. I have ${conesToSell} cones left.`);
    }

    printPowersOfTwo(16);
    sellIceCream(getRandomNumberInclusiveBetween(minConeAmount, maxConeAmount));
})();

