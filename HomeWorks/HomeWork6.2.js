function averageOfNumbers(arr) {
    const numericElements = arr.filter(item => typeof item === 'number');
    
    if (numericElements.length === 0) {
        return 0; 
    }
    
    const sum = numericElements.reduce((acc, num) => acc + num, 0);
    return sum / numericElements.length;
}

const mixedArray = [1, 'hello', 3, true, 5, null, 8];
console.log(averageOfNumbers(mixedArray)); 
