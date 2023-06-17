class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  eat() {
    console.log("吃");
  }
}
class Dog extends Animal {
  constructor(name, type) {
    super(name, type);
    this.legs = 4;
  }
  bark() {
    console.log("汪汪");
  }
}
const d = new Dog("小景", "金毛");

console.log(d);
