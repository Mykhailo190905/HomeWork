function askForNumber() {
    let attempts = 0; 

    while (attempts < 10) { 
        let userInput = prompt("Введите число больше 100:"); 
        
        if (userInput === null) {  
            console.log("Вы отменили ввод.");
            return;  
        }

        let number = Number(userInput); 

        if (number > 100) {
            console.log("Введеное число: " + number); 
            return;  
        } else {
            alert("Число должно быть больше 100!"); 
        }

        attempts++;  
    }

    console.log("вы достигли лимита попыток!");  
}

askForNumber();
