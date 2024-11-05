function removeCharacters(inputString, charsToRemove) {
    
    const regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    
    return inputString.replace(regex, '');
}

const result = removeCharacters("hello world", ['l', 'd']);
console.log(result); 
