
let car = {
  brand: "Force",
  model: "Teriyaki",
  year: 2025,
  color: "black"
};

// Function: tính tuổi xe
function getAge(car) {
  let currentYear = new Date().getFullYear();
  return currentYear - car.year;
}

// Function: mô tả xe
function getInfo(car) {
  return `${car.brand} ${car.model}, year ${car.year}, color ${car.color}`;
}

// Function: đổi màu xe
function paint(car, newColor) {
  car.color = newColor;
  return `New color is ${car.color}`;
}
console.log(getInfo(car));         
console.log("Age", getAge(car)); 
console.log(paint(car, "red"));    
console.log(getInfo(car));         