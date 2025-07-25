class box {
    constructor(name, l, b) {
        this.name = name;
        this.l = l;
        this.b = b;
    }

    area() {
        let area = this.l * this.b;
        console.log("area is :", area);
    }
}

class square extends box {
    constructor(a) {
        super("square", a, a); // name="square", l=a, b=a
    }

    area() {
        let area = this.l * this.b;
        console.log("area is :", area);
    }
}

let sq1 = new square(5);
sq1.area();
