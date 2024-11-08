function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.getPlus = function () {
        return this.a + this.b;
    }
    this.getMinus = function () {
        return this.a - this.b;
    }
}

let res = new Calculator(1, 4);
console.log(res.getMinus());