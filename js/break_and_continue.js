(() => {
    "use strict";

    let userNumber = parseInt(prompt('Pick an odd number between 1 and 50'));

    while (isNaN(userNumber) || userNumber % 2 === 0 || userNumber < 1 || userNumber > 50){
        userNumber = parseInt(prompt('Number must be a whole odd number between 1 and 50!'));
    }

    function printOddNumbersExcept(excludedNumber){
        console.log(`Number to skip is: ${excludedNumber}\n `);
        for (let i = 0; i < 50; i++){
            if (i === excludedNumber){
                console.log(`Yikes! Skipping number: ${excludedNumber}`);
                continue;
            } else if (i % 2 === 0){
                continue;
            }
            console.log(`Here is an odd number: ${i}`);
        }
    }

    printOddNumbersExcept(userNumber);
})();