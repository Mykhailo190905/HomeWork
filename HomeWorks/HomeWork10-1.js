const user = {
    name: "Михаил",
    age: 25,
    location: "Одесса, Украина",
    profession: "Программист",

    getInfo: function() {
        return `Имя: ${this.name}\nВозраст: ${this.age}\nМесто проживания: ${this.location}\nПрофессия: ${this.profession}`;
    },

    displayInfo: function() {
        console.log(this.getInfo());
    }
};

console.log("Получение информации через метод getInfo:");
console.log(user.getInfo()); 

console.log("Отображение информации через метод displayInfo:");
user.displayInfo(); 
