
const N = parseInt(prompt("Введите целое число N:"), 10); // Преобразуем введенное значение в целое число


if (isNaN(N)) {
    console.log("Пожалуйста, введите корректное целое число.");
} else {
    console.log(`Целые числа от 1 до 100, квадрат которых не превышает ${N}:`);
    
    
    for (let i = 1; i <= 100; i++) {
        const square = i * i; 
        
        
        if (square <= N) {
            console.log(i); 
        }
    }
}
