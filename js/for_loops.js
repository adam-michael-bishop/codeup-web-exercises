(() => {
    'use strict';

    function showMultiplicationTable(number) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }

    function generateTenRandomNumbers(minNumber, maxNumber) {
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
            if (randomNumber % 2 === 0) {
                console.log(`${randomNumber} is even`);
                continue;
            }
            console.log(`${randomNumber} is odd`);
        }
    }

    function numberPyramid(length) {
        for (let i = 1; i <= length; i++) {
            let numberString = '';
            for (let j = i; j > 0; j--) {
                numberString += `${i}`;
            }
            console.log(numberString);
        }
    }

    function decrementByFive(number) {
        for (let i = number; i > 0; i -= 5) {
            console.log(i);
        }
    }

    showMultiplicationTable(7);
    generateTenRandomNumbers(20, 200);
    numberPyramid(9);
    decrementByFive(100);
})();

