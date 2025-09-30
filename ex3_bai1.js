let products = [
  { id: 1, name: "Laptop Pro 2025", price: 1500, stock: 3, category: "Electronics" },
  { id: 2, name: "Phone Max", price: 800, stock: 10, category: "Electronics" },
  { id: 3, name: "Casual Shirt", price: 40, stock: 50, category: "Clothes" },
  { id: 4, name: "Running Shoes", price: 90, stock: 20, category: "Clothes" },
  { id: 5, name: "Science Book", price: 15, stock: 100, category: "Stationery" },
];

let cart = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 5 },
];


//In ra danh sách sản phẩm trong kho theo format:Laptop Pro 2025 - $1500 - Còn: 3 cái 
products.forEach(product => {
let productInfor = `${product.name} - $${product.price} - Còn: ${product.stock} cái`;
console.log(productInfor);
});


// Kiểm tra xem tất cả sản phẩm có giá lớn hơn 10 không
let allAbove10 = true; 
for (let p of products) {
  if (p.price <= 10) {
    allAbove10 = false;
    break; 
  }
}
if (allAbove10 === true) {
  console.log("tất cả sản phẩm có giá lớn hơn 10");
}
else {
  console.log("có sản phẩm có giá <= 10");
}

// Kiểm tra xem có sản phẩm nào hết hàng (stock = 0) không.
if (products.every( p=> p.stock > 0)){
  console.log("Tất cả sản phẩm còn hàng")
}
else {
  console.log("Có sản phẩm hết hàng")
}

//Tìm sản phẩm có id = 2 (Phone Max).
let product1 = ""; 
for (let p of products) {
  if (p.id ===  2) {
    product1 = p.name;
    break; 
  }
}
console.log(product1)

//  Danh sách sản phẩm thuộc Clothes
let product2 = products.filter( p => p.category === "Clothes").map( p => p.name);
console.log(`Danh sách sản phẩm thuộc Clothes: ${product2}`)

//tổng số tiền giỏ hàng
let sum = cart.reduce((acc, item) => {
  let product = products.find(p=>p.id === item.productId)
  if (product){
    acc += item.quantity*product.price;
  }
  return acc;
},0)
console.log(`tổng số tiền giỏ hàng: ${sum}`)

// Tổng số sp còn lại trong kho
let remaining_stock = products.reduce((acc, product) => {
  let item = cart.find(c => c.productId === product.id)
  if (item){
    return acc + (product.stock - item.quantity);
  }
  return acc + product.stock;
},0)
console.log(`tổng số sp còn lại trong kho: ${remaining_stock}`)

//các sản phẩm có tên chứa "Pro" 
let productName = products.filter(p => p.name.includes("Pro"));
productName.forEach( p => {
  console.log(`các sản phẩm có tên chứa "Pro" : ${p.name}`)
})

// Kiểm tra xem trong giỏ hàng có sản phẩm "Book" nào không?
let hasProduct = cart.filter( item => {
  let product = products.find( p => p.id === item.productId)
  return product && product.name.includes("Book")
});
hasProduct.forEach( c=>{
  let product = products.find( p => p.id === c.productId)
  console.log (`Giỏ hàng có sản phẩm "Book"là: ${product.name}`)
})

// Sắp xếp sản phẩm theo giá (sort)
let priceAsc = products.sort((a,b) => a.price - b.price);
let productNamesAsc = priceAsc.map(p => p.name);
console.log(`Danh sách sản phẩm theo giá tăng dần: ${productNamesAsc.join(", ")}`);

let priceDesc = products.sort((a,b) => b.price - a.price);
let productNamesDesc = priceAsc.map(p => p.name);
console.log(`Danh sách sản phẩm theo giá tăng dần: ${productNamesDesc.join(", ")}`);