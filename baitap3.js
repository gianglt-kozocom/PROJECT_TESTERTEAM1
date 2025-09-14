let fullname = prompt("Nhập tên:");
//Xóa khoảng trắng đầu cuối
fullname = fullname.trim();
// Viết hoa chữ cái đầu mỗi từ
let words = fullname.split(/\s+/);
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
}
words = words.join(" ");
// In số từ trong tên
let lenghtFullname = words.length;
console.log(`Xóa khoảng cách đầu cuối:${fullname}`);
console.log(`Viết hoa tên:${words}`);
console.log(`Số từ trong tên:${lenghtFullname}`);