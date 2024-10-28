
const number = parseInt(prompt("Введите целое число:"), 10);


if (isNaN(number) || number <= 1) {
    console.log("Пожалуйста, введите целое число больше 1.");
} else {
    let isPrime = true; 
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) { 
            isPrime = false; 
            break; 
        }
    }

    if (isPrime) {
        console.log(`${number} является простым числом.`);
    } else {
        console.log(`${number} не является простым числом.`);
    }
}



/*
const start = parseInt(prompt("Введите целое число:"), 10);

if (isNaN(start) || start <= 1) {
    console.log("Пожалуйста, введите целое число больше 1.");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(start); i++) {
        if (start % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${start} является простым числом.`);
    } else {
        console.log(`${start} не является простым числом.`);
    }
}
*/