
//Bai tap 1
let width = parseFloat(prompt("Width (m):"));
let height = parseFloat(prompt("Height (m):"));

if (isNaN(height) || height <= 0) {
  alert("Height invalid!");
} else if (isNaN(width) || width <= 0) {
  alert("Width invalid!");
} else {
  let chuvi = 2 * (width + height);
  let dientich = width * height;

  console.log(`Diện tích là: ${dientich} m²`);
  console.log(`Chu vi là: ${chuvi} m`);
}

//Bài tập 2
function nhapDiem(mon) {
  let diem = parseFloat(prompt(`Nhập điểm ${mon}:`));
  if (isNaN(diem) || diem < 0 || diem > 10) {
    alert(`${mon} invalid!`);
    return null;
  }
  return diem;
}
let toan = nhapDiem("Toán");
let ly = nhapDiem("Lý");
let hoa = nhapDiem("Hóa");
let diemTB = (toan + ly + hoa)/3;
console.log(`Tong diem 3 mon la: ${diemTB}`);
if(diemTB >= 8){
    console.log("Giỏi");
} else if(diemTB >=6.5)
{
    console.log("Khá");
}else if(diemTB >=5)
{
    console.log("TB");
 }else {
console.log("Yếu")
}

//Bài tập 3

let fullname = prompt("Nhập tên:");
//Xóa khoảng trắng đầu cuối
fullname = fullname.trim();
// Viết hoa chữ cái đầu mỗi từ
let words = fullname.split(/\s+/);
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
}
let formatName = words.join(" ");
// In số từ trong tên
let lenghtFullname = words.length;
console.log(`Xóa khoảng cách đầu cuối: ${fullname}`);
console.log(`Viết hoa tên: ${formatName}`);
console.log(`Số từ trong tên: ${lenghtFullname}`);