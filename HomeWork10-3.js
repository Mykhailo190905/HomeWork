const contactBook = {
    contacts: [
        { name: "Иван", phone: "123-456-789", email: "ivan@example.com" },
        { name: "Мария", phone: "987-654-321", email: "maria@example.com" }
    ],

    findContactByName: function(name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : "Контакт не найден";
    },

    addContact: function(name, phone, email) {
        const existingContact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            return "Контакт с таким именем уже существует";
        }

        this.contacts.push({ name, phone, email });
        return "Контакт успешно добавлен";
    }
};

console.log("Поиск контакта по имени 'Иван':");
console.log(contactBook.findContactByName("Иван")); 

console.log("Добавление нового контакта 'Олег':");
console.log(contactBook.addContact("Олег", "555-555-555", "oleg@example.com")); 

console.log("Попытка добавить существующий контакт 'Мария':");
console.log(contactBook.addContact("Мария", "111-111-111", "maria2@example.com")); 
console.log("Текущий список контактов:");
console.log(contactBook.contacts);
