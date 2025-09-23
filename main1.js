
let car = {
  brand: "Force",
  model: "Teriyaki",
  year: 2025,
  color: "black",
  getAge() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },

  getInfo() {
    return `${this.brand} ${this.model}, year ${this.year}, color ${this.color}`;
  },
  paint(newColor) {
    this.color = newColor;
    return `New color is ${this.color}`;
  }
};
console.log(car.getInfo());
console.log("Age", car.getAge());
console.log(car.paint("red"));
console.log(car.getInfo());

