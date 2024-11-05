
const exchangeRate = 41.26; 
const startAmount = 10; 
const endAmount = 100; 
const step = 10; 

for (let dollars = startAmount; dollars <= endAmount; dollars += step) {
    const hryvnias = dollars * exchangeRate; 
    console.log(`${dollars} долларов = ${hryvnias} гривень`); 
}


/*
const exchangeRate = 44.77;
const startAmount = 10;
const endAmount = 50;
const step = 5;

for (let euro = startAmount; euro <= endAmount; euro += step){
    const hryvnias = euro * exchangeRate;
    console.log(`${euro} евро = ${hryvnias.toFixed(2)} гривень`)
}
    */