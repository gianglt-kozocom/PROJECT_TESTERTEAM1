
let car = {
  brand: "Force",
  model: "Teriyaki",
  year: 2025,
  color: "black",

  // Method: tính tuổi xe
  getAge() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },

  // Method: mô tả xe
  getInfo() {
    return `${this.brand} ${this.model}, year ${this.year}, color ${this.color}`;
  },

  // Method: đổi màu xe
  paint(newColor) {
    this.color = newColor;
    return `New color is ${this.color}`;
  }
};

// Test
console.log(car.getInfo());
console.log("Age", car.getAge());
console.log(car.paint("red"));
console.log(car.getInfo());
